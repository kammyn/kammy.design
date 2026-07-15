import Link from "next/link";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
} from "@phosphor-icons/react/dist/ssr";
import { getNextProject, getPreviousProject } from "@/lib/projects";
import { cn } from "@/lib/cn";

type CaseStudySideNavProps = {
  slug: string;
};

export function CaseStudySideNav({ slug }: CaseStudySideNavProps) {
  const previousProject = getPreviousProject(slug);
  const nextProject = getNextProject(slug);

  return (
    <nav
      className="pointer-events-none absolute inset-0 z-20 hidden min-[744px]:block"
      aria-label="Case study navigation"
    >
      <Link
        href={`/work/${previousProject.slug}`}
        aria-label={`Previous case study: ${previousProject.title}`}
        className={cn(
          "case-study-side-nav__btn case-study-side-nav__btn--prev",
          "pointer-events-auto absolute top-1/2 -translate-y-1/2 text-white",
          "transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        )}
      >
        <ArrowCircleLeft weight="duotone" size={48} />
      </Link>
      <Link
        href={`/work/${nextProject.slug}`}
        aria-label={`Next case study: ${nextProject.title}`}
        className={cn(
          "case-study-side-nav__btn case-study-side-nav__btn--next",
          "pointer-events-auto absolute top-1/2 -translate-y-1/2 text-white",
          "transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        )}
      >
        <ArrowCircleRight weight="duotone" size={48} />
      </Link>
    </nav>
  );
}
