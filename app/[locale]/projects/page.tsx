import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";
import { METADATA, getPageUrl } from "@/common/constants/metadata";
import { getProjectsData } from "@/services/projects";

interface ProjectsPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: ProjectsPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
    keywords: `software developer projects, frontend portfolio, ${METADATA.creator}`,
    alternates: {
      canonical: getPageUrl(`/${locale}/projects`),
    },
  };
}

const ProjectsPage = async ({ params: { locale } }: ProjectsPageProps) => {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Projects projects={await getProjectsData(locale)} />
    </Container>
  );
};

export default ProjectsPage;
