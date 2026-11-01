import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { METADATA, SITE_URL, getPageUrl } from "@/common/constants/metadata";
import { projects } from "@/contents/projects";
import { loadProjectContent } from "@/common/libs/mdx";
import { getProjectsDataBySlug } from "@/services/projects";
import { notFound } from "next/navigation";
import { cache } from "react";
import { setRequestLocale } from "next-intl/server";

interface ProjectDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => project.is_show)
    .map(({ slug }) => ({ slug }));
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
      ...(project.image
        ? {
            images: project.image.startsWith("/")
              ? `${SITE_URL}${project.image}`
              : project.image,
          }
        : {}),
      url: getPageUrl(`/${locale}/projects/${project.slug}`),
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "article",
      authors: [METADATA.creator],
    },
    keywords: project.title,
    alternates: {
      canonical: getPageUrl(`/${locale}/projects/${params.slug}`),
    },
  };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  setRequestLocale(params.locale);
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
