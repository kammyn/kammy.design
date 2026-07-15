import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { PageShell } from "@/components/PageShell";
import { getCaseStudyBySlug } from "@/lib/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { caseStudies } = await import("@/lib/caseStudies");
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.title} — Kammy Nguyen`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <PageShell
      active="work"
      exterior={<CaseStudySideNav slug={study.slug} />}
    >
      <CaseStudyTemplate study={study} />
    </PageShell>
  );
}
