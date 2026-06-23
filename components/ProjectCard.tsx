import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-[221/212] w-full overflow-hidden rounded-sm bg-accent/5">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 220px"
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
      <div className="flex flex-col gap-2">
        <h2 className="font-sans text-base font-medium tracking-wide text-accent">
          {project.title}
        </h2>
        <p className="font-sans text-sm leading-snug text-accent/80">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
