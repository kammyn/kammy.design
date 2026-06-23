import { PageShell } from "@/components/PageShell";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <PageShell active="work">
      <main className="mx-auto max-w-[1200px]">
        <h1 className="font-editorial text-[clamp(1.75rem,3vw,2.25rem)] italic text-accent">
          Selected Works
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </PageShell>
  );
}
