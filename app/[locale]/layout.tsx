import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "../globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import { METADATA, SITE_URL } from "@/common/constants/metadata";
import { inter } from "@/common/styles/fonts";
import SkeletonThemeProvider from "@/SkeletonThemeProvider";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: RootLayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Profile" });
  return {
    metadataBase: new URL(SITE_URL),
    title: `${METADATA.creator} | Software Engineer`,
    description: t("description"),
    keywords: METADATA.keyword,
    creator: METADATA.creator,
    authors: METADATA.authors,
    icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
    openGraph: {
      title: `${METADATA.creator} | Software Engineer`,
      description: t("description"),
      url: `/${locale}`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout = async ({
  children,
  params: { locale },
}: RootLayoutProps) => {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={inter.className}>
        <NextTopLoader
          color="#fbe400"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #fbe400,0 0 5px #ffffb8"
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProviderContext>
            <SkeletonThemeProvider>
              <Layouts>{children}</Layouts>
            </SkeletonThemeProvider>
          </ThemeProviderContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
