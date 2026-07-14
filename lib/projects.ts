export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  hoverImage?: string;
  color: string;
};

export const projects: Project[] = [
  {
    slug: "goblintown",
    title: "GOBLINTOWN",
    description: "Interactive experiences for an evolving IP",
    image: "/images/work/goblintown.jpg",
    color: "#3d5a3e",
  },
  {
    slug: "meme-shuffle",
    title: "MEME SHUFFLE",
    description: "Making memes playful and unpredictable",
    image: "/images/work/meme-shuffle.jpg",
    color: "#6b2a4a",
  },
  {
    slug: "upstream",
    title: "UPSTREAM",
    description: "Governance tools for decentralized communities",
    image: "/images/work/upstream.jpg",
    color: "#2a4a6b",
  },
  {
    slug: "meme-depot",
    title: "MEME DEPOT",
    description:
      "A home for discovering memes and collecting internet culture",
    image: "/images/work/meme-depot.jpg",
    color: "#6b4a2a",
  },
  {
    slug: "przmatic",
    title: "PRZMATIC",
    description: "Mapping thoughts into insights",
    image: "/images/work/przmatic.jpg",
    color: "#4a3d6b",
  },
  {
    slug: "crofusion",
    title: "CROFUSION",
    description: "AI generated landing pages for marketing optimization",
    image: "/images/work/crofusion.png",
    color: "#4a6b3d",
  },
  {
    slug: "realreports",
    title: "REALREPORTS",
    description: "Democratizing real estate data on-chain",
    image: "/images/work/realreports.jpg",
    color: "#5a4a3d",
  },
  {
    slug: "torii",
    title: "TORII",
    description: "Bringing clarity to the home buying process",
    image: "/images/work/torii.png",
    color: "#3d4a6b",
  },
];

export function getNextProject(currentSlug: string): Project {
  const index = projects.findIndex((project) => project.slug === currentSlug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
