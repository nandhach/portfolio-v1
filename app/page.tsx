import type { Metadata } from "next";
import { withBasePath } from "@/common/libs/site";
import { getPageUrl } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: "nandhach | Portfolio",
  alternates: { canonical: getPageUrl("/en") },
};

export default function EntryPage() {
  const destination = withBasePath("/en/");
  return (
    <main className="p-8">
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <a href={destination}>Continue to portfolio / Buka portfolio</a>
    </main>
  );
}
