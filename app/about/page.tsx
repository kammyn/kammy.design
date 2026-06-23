import { PageShell } from "@/components/PageShell";

const bio = `I've always been interested in the systems behind things. The systems that shape how people make decisions. The stories that give products meaning. The invisible structures that influence culture, communities, and behavior.

My work began in design, but over time it expanded into brands, games, speculative concepts, physical products, and world building. Different mediums, same curiosity.

I like translating complexity into experiences people can understand, participate in, and remember.`;

export default function AboutPage() {
  return (
    <PageShell active="about">
      <main className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="w-full max-w-[422px] shrink-0">
          <h1 className="font-editorial text-[clamp(1.75rem,3vw,2.25rem)] italic text-accent">
            Hi, I&apos;m Kammy Nguyen.
          </h1>
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-accent/90">
            {bio.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[377/473] w-full max-w-[377px] shrink-0 overflow-hidden rounded-sm bg-gradient-to-br from-accent/20 to-accent/5 lg:mx-0">
          {/* Drop portrait at public/images/about/portrait.jpg to replace placeholder */}
          <div className="absolute inset-0 flex items-end justify-center pb-8 font-sans text-sm text-accent/40">
            Portrait
          </div>
        </div>
      </main>
    </PageShell>
  );
}
