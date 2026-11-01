import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";
import { METADATA, getPageUrl } from "@/common/constants/metadata";
import {
  getAchievementsData,
  getAchivementTypes,
  getAchivementCategories,
} from "@/services/achievements";

interface AchievementsPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: AchievementsPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AchievementsPage" });

  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
    keywords: `software developer achievements, certificates, ${METADATA.creator}`,
    alternates: {
      canonical: getPageUrl(`/${locale}/achievements`),
    },
  };
}

const AchievementsPage = async ({
  params: { locale },
}: AchievementsPageProps) => {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AchievementsPage" });
  const [items, types, categories] = await Promise.all([
    getAchievementsData({}, locale),
    getAchivementTypes(),
    getAchivementCategories(),
  ]);

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Achievements
        items={items}
        types={types}
        categories={categories}
        locale={locale}
      />
    </Container>
  );
};

export default AchievementsPage;
