import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import { METADATA, SITE_URL, getPageUrl } from "@/common/constants/metadata";
import { withBasePath } from "@/common/libs/site";
import DocumentLanguage from "@/common/components/elements/DocumentLanguage";
import SkeletonThemeProvider from "@/SkeletonThemeProvider";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params: { locale },
}: RootLayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Profile" });
  return {
    metadataBase: new URL(SITE_URL),
    title: `${METADATA.creator} | Software Developer`,
    description: t("description"),
    keywords: METADATA.keyword,
    creator: METADATA.creator,
    authors: METADATA.authors,
    icons: {
      icon: withBasePath("/icon.svg"),
      shortcut: withBasePath("/icon.svg"),
      apple: withBasePath("/icon.svg"),
    },
    openGraph: {
      title: `${METADATA.creator} | Software Developer`,
      description: t("description"),
      url: getPageUrl(`/${locale}`),
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

  const messages = await getMessages({ locale });

  return (
    <>
      <DocumentLanguage locale={locale} />
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
    </>
  );
};

export default RootLayout;
