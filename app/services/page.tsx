import { PageShell } from "@/components/PageShell";

export default function ServicesPage() {
  return (
    <PageShell active="services">
      <main className="mx-auto max-w-[1200px]">
        <h1 className="font-editorial text-[clamp(1.75rem,3vw,2.25rem)] italic text-accent">
          Services
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-accent/90">
          Product design, brand systems, interactive experiences, and creative
          direction — shaped by systems thinking and storytelling.
        </p>
      </main>
    </PageShell>
  );
}
