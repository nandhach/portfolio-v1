import { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import { METADATA } from "@/common/constants/metadata";

type Props = { params: { locale: string } };

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "DashboardPage" });
  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
    alternates: { canonical: `/${locale}/dashboard` },
  };
}

const DashboardPage = async ({ params: { locale } }: Props) => {
  const t = await getTranslations({ locale, namespace: "DashboardPage" });
  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Suspense fallback={null}>
        <Dashboard />
      </Suspense>
    </Container>
  );
};

export default DashboardPage;
