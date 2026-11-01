import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const origin = new URL(process.env.DOMAIN || "http://localhost:3000").origin;
const root = path.resolve("out");
const projectSource = await readFile("contents/projects.ts", "utf8");
const sandbox = { exports: {} };
runInNewContext(
  ts.transpileModule(projectSource, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
  sandbox,
);
const projects = sandbox.exports.projects.filter((project) => project.is_show);
const slugs = projects.map((project) => project.slug);
const files = [];
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(filename);
    else files.push(filename);
  }
}
await walk(root);

for (const locale of ["en", "id"]) {
  for (const suffix of [
    "",
    "about/",
    "achievements/",
    "projects/",
    "contact/",
    ...slugs.map((slug) => `projects/${slug}/`),
  ]) {
    const route = `/${locale}/${suffix}`;
    const html = await readFile(path.join(root, route, "index.html"), "utf8");
    assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`), route);
    assert.ok(
      html.includes(`rel="canonical" href="${origin}${basePath}${route}"`),
      `Canonical: ${route}`,
    );
    assert.ok(!html.includes('href="/api/'), `API link: ${route}`);
    const ogUrl =
      suffix.startsWith("projects/") && suffix !== "projects/"
        ? route
        : `/${locale}/`;
    assert.ok(
      html.includes(`property="og:url" content="${origin}${basePath}${ogUrl}"`),
      `Open Graph URL: ${route}`,
    );
    if (suffix.startsWith("projects/") && suffix !== "projects/") {
      const slug = suffix.split("/")[1];
      const image = projects.find((project) => project.slug === slug)?.image;
      if (image) {
        const imageUrl = image.startsWith("/")
          ? `${origin}${basePath}${image}`
          : image;
        assert.ok(
          html.includes(`property="og:image" content="${imageUrl}"`),
          `Open Graph cover: ${route}; found ${html.match(/property="og:image" content="([^"]+)"/)?.[1]}`,
        );
      }
    }
    if (suffix === "achievements/") {
      assert.ok(
        html.includes('aria-haspopup="dialog"'),
        `Achievement cards: ${locale}`,
      );
    }
    if (suffix === "projects/") {
      for (const slug of slugs)
        assert.ok(
          html.includes(`${basePath}/${locale}/projects/${slug}/`),
          `Project link: ${slug}`,
        );
    }
  }
  for (const legacy of [
    "chat",
    "contents",
    "dashboard",
    "smart-talk",
    "legal",
  ]) {
    assert.ok(
      !files.some((file) => file.startsWith(path.join(root, locale, legacy))),
      `Legacy exported: ${legacy}`,
    );
  }
}
assert.ok(
  !files.some((file) => file.startsWith(path.join(root, "api"))),
  "API exported",
);
await access(path.join(root, ".nojekyll"));
const entry = await readFile(path.join(root, "index.html"), "utf8");
assert.ok(entry.includes(`0;url=${basePath}/en/`), "Root entry destination");
const notFound = await readFile(path.join(root, "404.html"), "utf8");
assert.ok(
  notFound.includes(`${basePath}/en/`) && notFound.includes(`${basePath}/id/`),
  "404 navigation",
);
// Every exported CSS font/image URL must resolve too; relative paths are relative
// to their stylesheet, whereas absolute paths include the deployment base path.
for (const file of files.filter((filename) => filename.endsWith(".css"))) {
  const css = await readFile(file, "utf8");
  for (const [, raw] of css.matchAll(/url\(([^)]+)\)/g)) {
    const url = raw.trim().replace(/^["']|["']$/g, "");
    if (/^(data:|https?:|\/\/|#)/.test(url)) continue;
    if (url.startsWith("/")) {
      assert.ok(
        !basePath || url.startsWith(`${basePath}/`),
        `CSS base path: ${url}`,
      );
      await access(
        path.join(
          root,
          decodeURIComponent(url.slice(basePath.length).split(/[?#]/)[0]),
        ),
      );
    } else {
      await access(
        path.resolve(
          path.dirname(file),
          decodeURIComponent(url.split(/[?#]/)[0]),
        ),
      );
    }
  }
}

let checked = 0;
for (const file of files.filter((filename) => filename.endsWith(".html"))) {
  const html = await readFile(file, "utf8");
  // Validate real HTML URLs, including encoded certificate filenames. Ignore
  // inline React payload strings, which are not HTML attributes.
  for (const [, raw] of html.matchAll(/(?:src|href|action)="([^"<>]*)"/g)) {
    const url = raw.replaceAll("&amp;", "&");
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    assert.ok(
      !basePath || url.startsWith(`${basePath}/`),
      `Missing base path: ${url} in ${file}`,
    );
    const local = decodeURIComponent(
      url.slice(basePath.length).split(/[?#]/)[0],
    );
    const target = path.join(root, local);
    await access(
      local.endsWith("/") ? path.join(target, "index.html") : target,
    );
    checked++;
  }
}
console.log(
  `Static export verified: ${2 * (5 + slugs.length)} locale pages, root, 404, ${checked} local URLs; no legacy/API routes.`,
);
