import Image from "next/image";
import { CaseStudyScrollColumn } from "@/components/CaseStudyScrollColumn";
import { PageShell } from "@/components/PageShell";
import { ResumeExperienceList } from "@/components/ResumeExperienceList";

const bio = `I've always been interested in the systems behind things. The systems that shape how people make decisions. The stories that give products meaning. The invisible structures that influence culture, communities, and behavior.

My work began in design, but over time it expanded into brands, games, speculative concepts, physical products, and world building. Different mediums, same curiosity.

I like translating complexity into experiences people can understand, participate in, and remember.`;

export default function AboutPage() {
  return (
    <PageShell active="about">
      <CaseStudyScrollColumn className="flex min-h-0 min-w-0 w-full max-w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,422px)_minmax(0,1fr)] lg:items-start lg:gap-12 lg:pr-[180px]">
        <div className="min-w-0 w-full max-w-[422px]">
          <h1 className="font-editorial text-[clamp(1.75rem,3vw,2.25rem)] italic text-accent">
            Hi, I&apos;m Kammy Nguyen.
          </h1>
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-accent-text">
            {bio.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <ResumeExperienceList />
          </div>
        </div>

        <div className="relative mx-auto aspect-[377/473] w-full max-w-[377px] min-w-0 overflow-hidden rounded-sm lg:mx-0">
          <Image
            src="/images/about/portrait.png"
            alt="Portrait of Kammy Nguyen"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 377px, 377px"
            priority
          />
        </div>
      </CaseStudyScrollColumn>
    </PageShell>
  );
}
