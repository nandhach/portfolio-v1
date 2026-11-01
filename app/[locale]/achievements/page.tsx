import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";
import { METADATA } from "@/common/constants/metadata";
import {
  getAchievementsData,
  getAchivementTypes,
  getAchivementCategories,
} from "@/services/achievements";

export const dynamic = "force-dynamic";

interface AchievementsPageProps {
  params: { locale: string };
  searchParams: {
    type?: string | string[];
    category?: string | string[];
    search?: string | string[];
  };
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
      canonical: `/${locale}/achievements`,
    },
  };
}

const AchievementsPage = async ({
  params: { locale },
  searchParams,
}: AchievementsPageProps) => {
  const t = await getTranslations({ locale, namespace: "AchievementsPage" });
  const first = (value?: string | string[]) =>
    Array.isArray(value) ? value[0] : value;
  const filters = {
    type: first(searchParams.type),
    category: first(searchParams.category),
    search: first(searchParams.search),
  };
  const [items, types, categories] = await Promise.all([
    getAchievementsData(filters, locale),
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
        filters={filters}
        locale={locale}
      />
    </Container>
  );
};

export default AchievementsPage;
