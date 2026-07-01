import { PageShell } from "@/components/PageShell";
import { CaseStudyScrollColumn } from "@/components/CaseStudyScrollColumn";
import { ProjectCard } from "@/components/ProjectCard";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <PageShell active="work">
      <CaseStudyScrollColumn className="flex min-h-0 min-w-0 flex-1 flex-col">
        <h1 className="shrink-0 font-editorial text-2xl italic leading-none text-accent">
          Selected Works
        </h1>

        <ul className="mt-4 grid min-w-0 grid-cols-1 gap-6 min-[744px]:grid-cols-2 lg:mt-4 lg:grid-cols-4">
          {projects.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard
                project={project}
                category={getCaseStudyBySlug(project.slug)?.category}
              />
            </li>
          ))}
        </ul>
      </CaseStudyScrollColumn>
    </PageShell>
  );
}
