import { PageFrame } from "@/components/PageFrame";

export default function Home() {
  return (
    <PageFrame panelVariant="star">
      <div className="home-page flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden pt-6">
        <main className="flex min-h-0 min-w-0 flex-1 flex-col justify-end">
          <h1 className="hero-headline font-editorial italic text-heading">
            I&apos;m Kammy Nguyen.
            <br />
            I design products and interactive experiences
            <br />
            shaped by systems, storytelling, and culture
          </h1>
        </main>
      </div>
    </PageFrame>
  );
}
