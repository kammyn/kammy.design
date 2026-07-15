import Image from "next/image";
import { CaseStudyScrollColumn } from "@/components/CaseStudyScrollColumn";
import { PageShell } from "@/components/PageShell";
import { ResumeExperienceList } from "@/components/ResumeExperienceList";

const bioParagraphs = [
  <>
    I&apos;m a <strong className="font-bold">certified chaos wrangler</strong>{" "}
    disguised as a <strong className="font-bold">designer</strong>. I enjoy
    making sense of complexity and turning abstract ideas into{" "}
    <strong className="font-bold">products, experiences, and brands</strong>{" "}
    that people can actually interact with.
  </>,
  <>
    Over the past decade I&apos;ve worked across AI, Web3, entertainment,
    games, B2B, and consumer products. The medium changes, but the
    goal stays the same:{" "}
    <strong className="font-bold">
      building things that people genuinely use and enjoy
    </strong>
    .
  </>,
  <>
    Currently based in East Texas.
    Previously San Francisco & Denver.
  </>,
];

export default function AboutPage() {
  return (
    <PageShell active="about">
      <CaseStudyScrollColumn className="flex min-h-0 min-w-0 w-full max-w-full flex-1 flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,422px)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="min-w-0 w-full max-w-[422px]">
          <h1 className="font-editorial text-[clamp(1.75rem,3vw,2.25rem)] italic text-heading">
            Hi, I&apos;m Kammy Nguyen.
          </h1>
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-accent-text">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10">
            <ResumeExperienceList />
          </div>
        </div>

        <div className="flex w-full min-w-0 justify-center lg:self-start">
          <div className="relative aspect-[377/473] w-full max-w-[377px] min-w-0 overflow-hidden rounded-sm">
            <Image
              src="/images/about/portrait.png"
              alt="Portrait of Kammy Nguyen"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 377px, 377px"
              priority
            />
          </div>
        </div>
      </CaseStudyScrollColumn>
    </PageShell>
  );
}
