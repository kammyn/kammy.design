import { PageFrame } from "@/components/PageFrame";

export default function Home() {
  return (
    <PageFrame panelVariant="star">
      <main className="flex flex-1 flex-col justify-end">
        <h1 className="w-full max-w-[695px] font-editorial text-[clamp(1.5rem,2.2vw+0.75rem,2.5rem)] italic leading-[1.12] text-accent">
          I design products and interactive experiences shaped by systems,
          storytelling, and culture
        </h1>
      </main>
    </PageFrame>
  );
}
