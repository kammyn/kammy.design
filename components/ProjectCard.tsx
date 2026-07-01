import Image from "next/image";
import Link from "next/link";
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
      <div className="relative h-[212px] w-full shrink-0 overflow-hidden rounded-lg bg-accent/5">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 743px) 100vw, (max-width: 1023px) 50vw, 25vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(145deg, ${project.color} 0%, color-mix(in srgb, ${project.color} 60%, #f7f3e7) 100%)`,
            }}
          />
        )}
      </div>

      <div className="flex min-w-0 flex-col gap-2 break-words">
        <h2 className="font-sans text-lg font-bold leading-normal text-accent">
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
