import Link from "next/link";
import { ProjectCardMedia } from "@/components/ProjectCardMedia";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  category?: string;
};

export function ProjectCard({ project, category }: ProjectCardProps) {
  const tags = category?.split(" / ").map((tag) => tag.trim()) ?? [];

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex min-w-0 flex-col gap-4"
    >
      {project.image ? (
        <ProjectCardMedia
          image={project.image}
          hoverImage={project.hoverImage}
          title={project.title}
        />
      ) : (
        <div className="relative h-[212px] w-full shrink-0 overflow-hidden rounded-lg bg-accent/5">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, ${project.color} 0%, color-mix(in srgb, ${project.color} 60%, #f7f3e7) 100%)`,
            }}
          />
        </div>
      )}

      <div className="flex min-w-0 flex-col gap-2 break-words">
        <h2 className="font-sans text-lg font-bold leading-normal text-heading transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h2>
        {tags.length > 0 ? (
          <p className="font-sans text-xs uppercase leading-snug text-accent-text-muted">
            {tags.join(" · ")}
          </p>
        ) : null}
        <p className="font-sans text-base leading-normal text-accent-text">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
