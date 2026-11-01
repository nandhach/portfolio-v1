import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";
import { METADATA, getPageUrl } from "@/common/constants/metadata";

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: HomePageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Profile" });

  return {
    title: `${METADATA.creator} | Portfolio`,
    description: t("description"),
    alternates: {
      canonical: getPageUrl(`/${locale}`),
    },
    openGraph: {
      title: `${METADATA.creator} | Personal Website`,
      description: t("description"),
      url: getPageUrl(`/${locale}`),
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

const HomePage = async ({ params: { locale } }: HomePageProps) => {
  setRequestLocale(locale);
  return (
    <Container data-aos="fade-up">
      <Home />
    </Container>
  );
};

export default HomePage;
