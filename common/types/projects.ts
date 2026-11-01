import { Localized } from "./content";

export type ProjectItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image?: string;
  link_demo?: string | null;
  link_github?: string | null;
  stacks: string[];
  content?: string | null;
  is_show: boolean;
  is_featured: boolean;
  order: number;
};

export type LocalProject = Omit<
  ProjectItem,
  "title" | "description" | "content"
> & {
  translations: Localized<Pick<ProjectItem, "title" | "description">>;
};

export type ProjectItemProps = {
  projects: ProjectItem[];
};
