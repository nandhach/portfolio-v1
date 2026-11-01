import { projects } from "@/contents/projects";
import { getContentLocale } from "@/common/types/content";
import { ProjectItem } from "@/common/types/projects";
import { getPublicUrl } from "@/common/libs/content";

export const getProjectsData = async (
  locale: string = "en",
): Promise<ProjectItem[]> =>
  projects
    .filter((item) => item.is_show)
    .map(({ translations, ...item }) => ({
      ...item,
      ...translations[getContentLocale(locale)],
      link_demo: getPublicUrl(item.link_demo),
      link_github: getPublicUrl(item.link_github),
    }))
    .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));

export const getProjectsDataBySlug = async (
  slug: string,
  locale: string = "en",
) => (await getProjectsData(locale)).find((item) => item.slug === slug) ?? null;
