export type ResumeExperience = {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
};

export const resumeExperience: ResumeExperience[] = [
  {
    id: "truth-arts",
    title: "Lead Designer & Game Developer",
    company: "Truth Arts",
    dates: "Jun 2023 – Feb 2026",
    description:
      "Designed and developed interactive products, games, and digital experiences that expanded the Goblintown IP and broader Truth Arts products.",
  },
  {
    id: "realreports",
    title: "Senior Product Designer",
    company: "RealReports™",
    dates: "Apr 2022 – Dec 2022",
    description:
      "Designed a property intelligence platform that unified fragmented real estate data into a single, accessible experience for buyers, agents, and investors.",
  },
  {
    id: "torii-senior",
    title: "Senior Product Designer",
    company: "Torii",
    dates: "Mar 2021 – Dec 2022",
    description:
      "Redesigned the homebuying journey, bringing clarity and structure to a traditionally fragmented customer experience.",
  },
  {
    id: "freelance",
    title: "Product Designer (Various Contracts)",
    company: "Freelance",
    dates: "Oct 2019 – Mar 2021",
    description:
      "Designed end-to-end digital products for startups across AI, insurtech, SaaS, consumer technology, and web3—from product strategy and UX to visual design, design systems, and developer handoff.",
  },
];
