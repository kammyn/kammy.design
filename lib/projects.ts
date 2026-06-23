export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  color: string;
};

export const projects: Project[] = [
  {
    slug: "upstream",
    title: "UPSTREAM",
    description: "Governance tools for decentralized communities",
    color: "#2a4a6b",
  },
  {
    slug: "goblintown",
    title: "GOBLINTOWN",
    description: "Interactive experiences for an evolving IP",
    color: "#3d5a3e",
  },
  {
    slug: "meme-depot",
    title: "MEME DEPOT",
    description:
      "A home for discovering memes and collecting internet culture",
    color: "#6b4a2a",
  },
  {
    slug: "zeropoint",
    title: "ZEROPOINT",
    description: "Making esoteric systems accessible and practical",
    color: "#4a3d6b",
  },
  {
    slug: "meme-shuffle",
    title: "MEME SHUFFLE",
    description: "Making memes playful and unpredictable",
    color: "#6b2a4a",
  },
];
