import createNextIntlPlugin from "next-intl/plugin";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const withNextIntl = createNextIntlPlugin();
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

if (basePath && !/^\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(basePath)) {
  throw new Error(
    "NEXT_PUBLIC_BASE_PATH must be empty or a path like /portfolio-v1 (no trailing slash).",
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// Next.js 14's development export validation can reject locale params generated
// by a parent layout. Keep local preview in dev mode; production still exports.
export default (phase) =>
  withNextIntl({
    ...nextConfig,
    ...(phase !== PHASE_DEVELOPMENT_SERVER ? { output: "export" } : {}),
  });
