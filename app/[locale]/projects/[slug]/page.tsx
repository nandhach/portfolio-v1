import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { METADATA } from "@/common/constants/metadata";
import { loadProjectContent } from "@/common/libs/mdx";
import { getProjectsDataBySlug } from "@/services/projects";
import { notFound } from "next/navigation";
import { cache } from "react";

interface ProjectDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

const getProjectDetail = cache(async (slug: string, locale: string) => {
  const project = await getProjectsDataBySlug(slug, locale);
  if (!project) notFound();
  return { ...project, content: loadProjectContent(slug, locale) };
});

export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const project = await getProjectDetail(params.slug, params.locale);
  const locale = params.locale || "en";

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      ...(project.image ? { images: project.image } : {}),
      url: `/${locale}/projects/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "article",
      authors: [METADATA.creator],
    },
    keywords: project.title,
    alternates: {
      canonical: `/${locale}/projects/${params.slug}`,
    },
  };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const data = await getProjectDetail(params.slug, params.locale);

  return (
    <Container data-aos="fade-up">
      <BackButton url={`/${params.locale}/projects`} />
      <PageHeading title={data?.title} description={data?.description} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default ProjectDetailPage;
