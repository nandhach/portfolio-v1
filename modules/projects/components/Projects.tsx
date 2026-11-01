import { useTranslations } from "next-intl";

import ProjectCard from "./ProjectCard";
import EmptyState from "@/common/components/elements/EmptyState";
import { ProjectItemProps } from "@/common/types/projects";

const Projects = ({ projects }: ProjectItemProps) => {
  const t = useTranslations("ProjectsPage");
  if (!projects.length) return <EmptyState message={t("no_data")} />;

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </section>
  );
};

export default Projects;
