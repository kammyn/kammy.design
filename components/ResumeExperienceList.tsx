import { resumeExperience } from "@/lib/resume";

export function ResumeExperienceList() {
  return (
    <section className="flex w-full flex-col gap-6">
      <h2 className="font-sans text-xs font-medium uppercase tracking-wide text-accent-text-muted">
        Experience
      </h2>

      <ul className="flex w-full flex-col gap-8">
        {resumeExperience.map((entry) => (
          <li key={entry.id} className="flex w-full flex-col gap-1.5">
            <div className="flex w-full flex-col gap-1 min-[744px]:flex-row min-[744px]:items-start min-[744px]:justify-between min-[744px]:gap-8">
              <h3 className="shrink-0 font-sans text-sm font-bold leading-snug text-accent">
                {entry.title}
              </h3>
              <p className="font-sans text-sm leading-snug text-accent-text min-[744px]:text-right">
                {entry.company}
              </p>
            </div>

            <p className="font-sans text-xs leading-snug text-accent-text-muted">
              {entry.dates}
            </p>

            <p className="font-sans text-sm leading-relaxed text-accent-text">
              {entry.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
