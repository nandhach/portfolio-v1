import { PROFILE } from "./profile";

const getSiteUrl = () => {
  try {
    const url = new URL(process.env.DOMAIN || "http://localhost:3000");
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.origin;
    }
  } catch {
    // A production domain has not been configured yet.
  }
  return "http://localhost:3000";
};

export const SITE_URL = getSiteUrl();

export const METADATA = {
  creator: PROFILE.name,
  keyword:
    "Muhammad Nandha Chrismawan, Software Engineer, React, Next.js, TypeScript, Surabaya",
  authors: {
    name: PROFILE.name,
    url: PROFILE.github,
  },
  openGraph: {
    url: SITE_URL,
    siteName: PROFILE.sName,
  },
  exTitle: `| ${PROFILE.name}`,
};
