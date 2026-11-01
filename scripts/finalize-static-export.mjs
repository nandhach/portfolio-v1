import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// The shared root layout cannot receive [locale]. Set the initial HTML language
// for static documents; DocumentLanguage keeps it correct after client navigation.
async function localize(directory, locale) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await localize(filename, locale);
    else if (entry.name.endsWith(".html")) {
      const html = await readFile(filename, "utf8");
      if (!/<html\b[^>]*\blang="[^"]*"/.test(html)) {
        throw new Error(`Missing HTML language: ${filename}`);
      }
      await writeFile(
        filename,
        html.replace(/(<html\b[^>]*\blang=")[^"]*"/, `$1${locale}"`),
      );
    }
  }
}

for (const locale of ["en", "id"]) await localize(`out/${locale}`, locale);
await writeFile("out/.nojekyll", "");
console.log("Static export finalized: en/id document language, .nojekyll.");
