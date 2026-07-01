import { PageFrame } from "@/components/PageFrame";

export default function Home() {
  return (
    <PageFrame panelVariant="star">
      <main className="flex min-w-0 flex-1 flex-col justify-end">
        <h1 className="hero-headline font-editorial italic text-accent">
          I&apos;m Kammy.
          <br />
          I design products and interactive experiences shaped by systems,
          storytelling, and culture
        </h1>
      </main>
    </PageFrame>
  );
}
