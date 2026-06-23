export type CaseStudySection = {
  label: "OVERVIEW" | "INSIGHT" | "STRATEGY" | "EXECUTION" | "OUTCOME";
  body: string;
  bullets?: string[];
};

export type CaseStudyImage = {
  src?: string;
  alt?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  sections: CaseStudySection[];
  images: CaseStudyImage[];
};

/** Figma template example — copy into a project entry when writing a case study. */
export const caseStudyTemplateExample: Omit<CaseStudy, "slug"> = {
  title: "Torii",
  subtitle: "Bringing clarity to the homebuying journey",
  category: "Real Estate / Consumer Experience",
  sections: [
    {
      label: "OVERVIEW",
      body: "Torii is a real estate brokerage focused on helping buyers navigate the homebuying process. I led the design of an end-to-end product experience that transformed a traditionally sales-driven journey into a more structured, product-led one.",
    },
    {
      label: "INSIGHT",
      body: "Buyers lacked visibility into where they were in the process, with information fragmented across emails, documents, and conversations",
    },
    {
      label: "STRATEGY",
      body: "Create a single source of truth for the homebuying journey.",
    },
    {
      label: "EXECUTION",
      body: "",
      bullets: [
        "Buyer onboarding",
        "Homebuying dashboard",
        "Progress tracking",
        "Application redesign",
      ],
    },
    {
      label: "OUTCOME",
      body: "A more transparent experience for buyers and a more effective workflow for agents.",
    },
  ],
  images: [{}, {}, {}],
};

function shell(
  slug: string,
  title: string,
  subtitle: string,
  category: string,
): CaseStudy {
  return {
    slug,
    title,
    subtitle,
    category,
    sections: [
      { label: "OVERVIEW", body: "" },
      { label: "INSIGHT", body: "" },
      { label: "STRATEGY", body: "" },
      { label: "EXECUTION", body: "", bullets: [] },
      { label: "OUTCOME", body: "" },
    ],
    images: [{}, {}, {}],
  };
}

export const caseStudies: CaseStudy[] = [
  shell(
    "upstream",
    "UPSTREAM",
    "Governance tools for decentralized communities",
    "Web3 / Product Design",
  ),
  shell(
    "goblintown",
    "GOBLINTOWN",
    "Interactive experiences for an evolving IP",
    "Entertainment / Interactive",
  ),
  shell(
    "meme-depot",
    "MEME DEPOT",
    "A home for discovering memes and collecting internet culture",
    "Consumer / Social",
  ),
  shell(
    "zeropoint",
    "ZEROPOINT",
    "Making esoteric systems accessible and practical",
    "Tools / Education",
  ),
  shell(
    "meme-shuffle",
    "MEME SHUFFLE",
    "Making memes playful and unpredictable",
    "Consumer / Play",
  ),
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
