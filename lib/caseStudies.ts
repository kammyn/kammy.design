export type CaseStudySection = {
  label: "OVERVIEW" | "INSIGHT" | "STRATEGY" | "EXECUTION" | "OUTCOME";
  body: string;
  bullets?: string[];
};

export type CaseStudyImage = {
  src?: string;
  alt?: string;
  /** Defaults to image. Use video for mp4/webm UI demos. */
  type?: "image" | "video";
  /** Optional poster frame for video (path under /public). */
  poster?: string;
  /** object-fit for the media frame. Videos default to contain for UI clarity. */
  fit?: "cover" | "contain";
  /** Background color behind contained media (e.g. video letterboxing). */
  background?: string;
  /** Skip Next.js image optimization for crisp UI exports. */
  unoptimized?: boolean;
  /** Override default 674/325 frame ratio (e.g. "9/16" for mobile). */
  aspectRatio?: string;
  /** Animate a split background/foreground image pair. */
  animation?: "grain-drift";
  /** Foreground layer for grain-drift (logo on transparent). */
  foregroundSrc?: string;
};

export type CaseStudyMediaRow = {
  layout: "row";
  columns?: 2 | 3;
  items: CaseStudyImage[];
};

export type CaseStudyMediaItem = CaseStudyImage | CaseStudyMediaRow;

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  sections: CaseStudySection[];
  images: CaseStudyMediaItem[];
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
  {
    slug: "upstream",
    title: "Upstream",
    subtitle: "Governance tools for decentralized communities",
    category: "Web3 / Governance / Community Platform",
    sections: [
      {
        label: "OVERVIEW",
        body: "Upstream is a platform that helps communities launch and manage DAOs through a governance dashboard. I led a redesign focused on making governance participation more accessible, understandable, and actionable for members.",
      },
      {
        label: "INSIGHT",
        body: "Many governance systems struggle with participation, not because members lack interest, but because the process itself is difficult to navigate. Complex proposal structures, fragmented information, and unclear voting workflows create friction that discourages engagement.",
      },
      {
        label: "STRATEGY",
        body: "The goal was to reduce the cognitive overhead of participating in governance. By improving information architecture, clarifying proposal workflows, and creating a more intuitive navigation system, the experience helped members understand what was being proposed, why it mattered, and how to take action.",
      },
      {
        label: "EXECUTION",
        body: "The redesign focused on the core governance experience, including proposal discovery, proposal creation, voting workflows, and the overall information architecture of the platform. Each interaction was designed to make governance participation feel more approachable and transparent.",
      },
      {
        label: "OUTCOME",
        body: "The resulting experience made it easier for community members to navigate governance, understand proposals, and participate in decision-making, creating a stronger foundation for sustainable community engagement.",
      },
    ],
    images: [
      {
        type: "video",
        src: "/videos/case-studies/Upstream-1.mp4",
        alt: "Upstream governance dashboard demo",
        background: "#9B8AFB",
      },
      {
        type: "video",
        src: "/videos/case-studies/Upstream2.mp4",
        alt: "Upstream proposal workflow demo",
        background: "#9B8AFB",
      },
      {
        type: "video",
        src: "/videos/case-studies/upstream-3.mp4",
        alt: "Upstream voting and navigation demo",
        background: "#9B8AFB",
      },
    ],
  },
  {
    slug: "goblintown",
    title: "GOBLINTOWN",
    subtitle: "Interactive experiences for an evolving IP",
    category: "Interactive IP / Video Games / Worldbuilding",
    sections: [
      {
        label: "OVERVIEW",
        body: "Goblintown is an entertainment IP developed by Truth Arts, spanning storytelling, games, digital experiences, and community-driven worldbuilding. I contributed to the development of a 100% hand-drawn roguelike game, designing gameplay systems and interactive experiences that expanded the Goblintown universe.",
      },
      {
        label: "INSIGHT",
        body: "Strong IPs extend beyond a single medium. Interactive experiences allow audiences to engage with a world rather than simply observe it, creating deeper participation and long-term community engagement.",
      },
      {
        label: "STRATEGY",
        body: "The goal was to translate Goblintown's personality and worldbuilding into gameplay. Rather than simply adapting the brand into a game, the experience was designed to reinforce the humor, unpredictability, and identity that defined the broader IP.",
      },
      {
        label: "EXECUTION",
        body: "I designed and developed a roguelike game while contributing to a broader suite of interactive products and digital experiences across the Goblintown ecosystem. Each project explored a different expression of the IP while maintaining a cohesive experience within the larger Goblintown universe.",
      },
      {
        label: "OUTCOME",
        body: "The project expanded Goblintown beyond traditional digital experiences, demonstrating how interactive gameplay could strengthen community engagement and deepen the identity of the broader entertainment IP.",
      },
    ],
    images: [
      {
        type: "video",
        src: "/videos/case-studies/goblintown1.mov",
        alt: "Goblintown gameplay demo",
        background: "#286C7F",
      },
      {
        src: "/images/work/goblintown-swamp.png",
        alt: "Goblintown swamp gameplay with gobphone minimap",
        fit: "contain",
        unoptimized: true,
      },
      {
        src: "/images/work/goblintown-stats.png",
        alt: "Goblintown upgrade selection with gob stats panel",
        fit: "contain",
        unoptimized: true,
      },
      {
        layout: "row",
        columns: 2,
        items: [
          {
            src: "/images/work/goblintown-gobphone-1.png",
            alt: "Gobphone home screen with objectives and apps",
            fit: "contain",
            aspectRatio: "9/16",
            unoptimized: true,
          },
          {
            src: "/images/work/goblintown-gobphone-2.png",
            alt: "Gobphone BiGiNC shop screen",
            fit: "contain",
            aspectRatio: "9/16",
            unoptimized: true,
          },
        ],
      },
      {
        src: "/images/work/goblintown-posters.png",
        alt: "Goblintown exhibit posters — Shaturn Returns and Angelical Goblins",
        fit: "contain",
        unoptimized: true,
      },
      {
        src: "/images/work/goblintown-sketches.png",
        alt: "Goblintown inventory and UI concept sketches",
        fit: "cover",
        aspectRatio: "830/1024",
        unoptimized: true,
      },
    ],
  },
  {
    slug: "meme-depot",
    title: "MEME DEPOT",
    subtitle: "A home for discovering memes and collecting internet culture",
    category: "Web3 / Creator Tools / Internet Archives",
    sections: [
      {
        label: "OVERVIEW",
        body: "Meme Depot is a platform for discovering, collecting, and organizing internet memes. Built for creators and online communities, the product became a shared archive for the visual culture that shapes conversations across the internet.",
      },
      {
        label: "INSIGHT",
        body: "Memes move quickly, but the systems for collecting them have remained surprisingly primitive. Creators often rely on screenshots, bookmarks, saved folders, and group chats to store content they may want to reference later, making discovery and retrieval difficult over time.",
      },
      {
        label: "STRATEGY",
        body: "The goal was to treat memes as cultural artifacts rather than disposable content. By combining discovery, collection, and organization into a single experience, the platform gave users a dedicated space to build personal archives and curate the content most relevant to their communities.",
      },
      {
        label: "EXECUTION",
        body: "I designed the product end-to-end, including the discovery experience, collection system, browsing workflows, and onboarding experience. The platform prioritized visual exploration and lightweight organization, making it easy to save, revisit, and share content over time.",
      },
      {
        label: "OUTCOME",
        body: "The platform gained traction among major web3 communities, including Goblintown and Pudgy Penguins, establishing itself as a centralized destination for meme discovery, collection, and cultural archiving.",
      },
    ],
    images: [
      {
        type: "video",
        src: "/videos/case-studies/memedepot-1.mp4",
        alt: "Meme Depot product demo",
        background: "#1E003F",
      },
      {
        src: "/images/work/meme-depot-posters.png",
        alt: "Meme Depot exhibit posters — Pudgy Penguins, Angelical Goblins, and Shaturn Returns",
        fit: "contain",
        background: "#1E003F",
        unoptimized: true,
      },
      {
        layout: "row",
        items: [
          {
            type: "video",
            src: "/videos/case-studies/memedepot-mob1.mp4",
            alt: "Meme Depot mobile experience",
            background: "#1E003F",
            fit: "cover",
            aspectRatio: "9/16",
          },
          {
            type: "video",
            src: "/videos/case-studies/memedepot-mobilemenu.mp4",
            alt: "Meme Depot mobile menu",
            background: "#1E003F",
            fit: "cover",
            aspectRatio: "9/16",
          },
        ],
      },
    ],
  },
  {
    slug: "przmatic",
    title: "PRZMATIC",
    subtitle: "Mapping thoughts into insights",
    category: "Productivity / Mind Mapping / Creativity",
    sections: [
      {
        label: "OVERVIEW",
        body: "Przmatic is a conceptual mind-mapping platform designed to help people explore ideas through connected thoughts rather than linear notes. The product combines guided prompts, visual mapping, and reflection into a creative thinking tool.",
      },
      {
        label: "INSIGHT",
        body: "Creative ideas rarely emerge in a straight line. Most note-taking tools prioritize organization after an idea exists, but offer little support for discovering connections during the thinking process.",
      },
      {
        label: "STRATEGY",
        body: "The concept explored how visual mapping and guided prompts could help users externalize their thinking, identify patterns, and develop ideas through exploration rather than documentation.",
      },
      {
        label: "EXECUTION",
        body: "I designed the product experience from concept to prototype, including the visual identity, interaction model, landing page, and core mind-mapping interface. The system explored branching thought structures, contextual prompts, and a calmer visual language that encouraged curiosity over productivity.",
      },
      {
        label: "OUTCOME",
        body: "Przmatic is currently in beta, exploring how visual mapping, guided prompts, and nonlinear thinking can support creativity and self-discovery through a more intuitive product experience.",
      },
    ],
    images: [
      {
        layout: "row",
        columns: 3,
        items: [
          {
            type: "video",
            src: "/videos/case-studies/przmatic1.mp4",
            alt: "Przmatic product demo",
            background: "#0B4444",
            fit: "cover",
            aspectRatio: "9/16",
          },
          {
            type: "video",
            src: "/videos/case-studies/przmatic2.mp4",
            alt: "Przmatic guided prompts flow",
            background: "#0B4444",
            fit: "cover",
            aspectRatio: "9/16",
          },
          {
            type: "video",
            src: "/videos/case-studies/przmatic3.mp4",
            alt: "Przmatic mind map interaction",
            background: "#0B4444",
            fit: "cover",
            aspectRatio: "9/16",
          },
        ],
      },
      {
        type: "video",
        src: "/videos/case-studies/przmatic-desktop.mp4",
        alt: "Przmatic desktop mind-mapping experience",
        background: "#0B4444",
      },
      {
        layout: "row",
        columns: 2,
        items: [
          {
            src: "/images/work/przmatic-logos.png",
            alt: "Przmatic logo mark on green and black",
            fit: "contain",
            aspectRatio: "1/1",
            unoptimized: true,
          },
          {
            src: "/images/work/przmatic-wordmark.png",
            alt: "Przmatic wordmark on textured green background",
            fit: "cover",
            aspectRatio: "1/1",
            unoptimized: true,
          },
        ],
      },
    ],
  },
  {
    slug: "meme-shuffle",
    title: "MEME SHUFFLE",
    subtitle: "Making memes playful and unpredictable",
    category: "Consumer / Creative Tool / Internet Culture",
    sections: [
      {
        label: "OVERVIEW",
        body: "Meme Shuffle is a web/mobile experience that generates memes by combining images, captions, and formats into unexpected combinations. The project explores how remix culture can be transformed into a lightweight, playful creative experience.",
      },
      {
        label: "INSIGHT",
        body: "Memes are one of the internet's most participatory forms of expression, but creating them often requires familiarity with existing formats, editing tools, and online conventions. This creates friction for something that is inherently playful and spontaneous.",
      },
      {
        label: "STRATEGY",
        body: "The goal was to make meme creation feel less like content production and more like play. Instead of building memes from scratch, users generate new combinations through a simple shuffling mechanic, encouraging experimentation, discovery, and unexpected outcomes.",
      },
      {
        label: "EXECUTION",
        body: "I designed the product end-to-end, including onboarding, generation flows, and the core interaction model. The experience was intentionally lightweight, prioritizing speed, exploration, and delight over customization or complexity.",
      },
      {
        label: "OUTCOME",
        body: "The resulting product transformed meme creation into a low-friction creative activity, demonstrating how internet culture could be packaged into a simple and engaging consumer experience.",
      },
    ],
    images: [
      {
        type: "video",
        src: "/videos/case-studies/updated-meme-shuffle-video.mp4",
        alt: "Meme Shuffle product demo",
        background: "#0018FF",
      },
      {
        src: "/images/work/meme-shuffle-logo.webp",
        alt: "Meme Shuffle logo with animated rainbow paint stroke",
        fit: "contain",
      },
      {
        src: "/images/work/meme-shuffle-screens.png",
        alt: "Meme Shuffle mobile screens — splash, onboarding, and meme generation flow",
        fit: "contain",
        background: "#0018FF",
        unoptimized: true,
      },
    ],
  },
  {
    slug: "crofusion",
    title: "CroFusion",
    subtitle: "AI generated landing pages for marketing optimization",
    category: "AI / Marketing Tools / Business Tools",
    sections: [
      {
        label: "OVERVIEW",
        body: "CroFusion is an AI-powered marketing platform designed to help businesses launch and test landing pages more quickly. The product combines AI-assisted page generation with campaign management tools, reducing the effort required to run marketing experiments.",
      },
      {
        label: "INSIGHT",
        body: "Testing new ideas often requires a surprising amount of setup. Creating landing pages, configuring integrations, and managing campaigns typically involves multiple tools and specialized expertise, making experimentation slower and more resource-intensive than it should be.",
      },
      {
        label: "STRATEGY",
        body: "The goal was to reduce the friction between an idea and a live campaign. By combining AI-generated landing pages, simplified workflows, and built-in integrations, the platform enabled users to create, launch, and iterate on marketing experiments from a single experience.",
      },
      {
        label: "EXECUTION",
        body: "I designed the end-to-end product experience, including the AI generation workflow, campaign management dashboard, and supporting systems for integrations and experimentation. The experience was designed to help users move quickly from concept to launch while maintaining visibility into campaign performance.",
      },
      {
        label: "OUTCOME",
        body: "The resulting MVP streamlined the process of creating and testing landing pages, giving businesses a faster path from marketing idea to live experiment.",
      },
    ],
    images: [
      {
        type: "video",
        src: "/videos/case-studies/crofusion1.mp4",
        alt: "CroFusion product demo",
        background: "#4376E0",
      },
      {
        type: "video",
        src: "/videos/case-studies/crofusion2.mp4",
        alt: "CroFusion AI landing page generation",
        background: "#4376E0",
      },
      {
        type: "video",
        src: "/videos/case-studies/crofusion3.mp4",
        alt: "CroFusion campaign management workflow",
        background: "#4376E0",
      },
    ],
  },
  {
    slug: "torii",
    title: "Torii",
    subtitle: "Bringing clarity to the home buying process",
    category: "Real Estate / Consumer Experience",
    sections: [
      {
        label: "OVERVIEW",
        body: "Torii is a real estate brokerage focused on helping buyers navigate the homebuying process. I led the design of an end-to-end experience that brought structure, visibility, and guidance to a traditionally fragmented journey.",
      },
      {
        label: "INSIGHT",
        body: "Buying a home involves dozens of decisions, documents, and conversations, yet buyers rarely have a clear understanding of where they are in the process or what comes next. Important information is often scattered across emails, applications, and conversations with agents, creating uncertainty throughout the journey.",
      },
      {
        label: "STRATEGY",
        body: "The goal was to create a single source of truth for the homebuying experience—guiding buyers through onboarding, centralizing critical information, and making progress visible at every stage. Rather than relying on agents to manually drive the process, the experience was designed to provide buyers with greater autonomy while keeping agents informed and engaged.",
      },
      {
        label: "EXECUTION",
        body: "The work focused on creating a cohesive buyer journey from initial onboarding through application completion. This included designing the platform's information architecture, dashboard experience, progress tracking system, and supporting workflows that helped buyers navigate each stage of the process.",
      },
      {
        label: "OUTCOME",
        body: "The resulting experience gave buyers greater clarity and confidence throughout the homebuying journey while helping agents collect better information and support clients more effectively. More broadly, the platform established a foundation for a more transparent and product-led approach to the customer experience.",
      },
    ],
    images: [
      {
        type: "video",
        src: "/videos/case-studies/torii2.mp4",
        alt: "Torii buyer journey workflow",
        background: "#FFD750",
      },
      {
        src: "/images/work/torii-search.png",
        alt: "Torii property search with map and listings",
        fit: "contain",
        background: "#FFD750",
        unoptimized: true,
      },
      {
        type: "video",
        src: "/videos/case-studies/torii1.mp4",
        alt: "Torii homebuying platform demo",
        background: "#FFD750",
      },
      {
        src: "/images/work/torii-listing.png",
        alt: "Torii property listing detail view",
        fit: "contain",
        background: "#FFD750",
        unoptimized: true,
      },
    ],
  },
  {
    slug: "realreports",
    title: "RealReports",
    subtitle: "Democratizing real estate data on-chain",
    category: "Real Estate / Data Platform / Web3",
    sections: [
      {
        label: "OVERVIEW",
        body: "RealReports (Previously Blockchain Home Registry) is a real estate data platform designed to make property information more accessible and transparent. By aggregating data from multiple providers, the platform gives users a comprehensive view of a property's history, characteristics, and market context in a single experience.",
      },
      {
        label: "INSIGHT",
        body: "Property data is often fragmented across multiple sources, making it difficult for buyers, agents, and investors to build a complete understanding of a property. Accessing information typically requires navigating multiple tools, reports, and providers.",
      },
      {
        label: "STRATEGY",
        body: "The goal was to create a unified source of truth for property intelligence. Rather than treating each dataset as a separate destination, the platform brings information together into a single experience, helping users quickly understand a property's story, context, and key insights.",
      },
      {
        label: "EXECUTION",
        body: "I designed the end-to-end product experience, creating a system for organizing and surfacing complex property data in a way that felt approachable and actionable. The work included dashboard design, information architecture, data visualization, and interaction patterns that helped users navigate large amounts of information with confidence.",
      },
      {
        label: "OUTCOME",
        body: "The resulting platform made real estate data easier to access, understand, and explore, transforming fragmented information into a cohesive product experience.",
      },
    ],
    images: [
      {
        type: "video",
        src: "/videos/case-studies/bhr1.mp4",
        alt: "RealReports property data platform demo",
        background: "#E5A4E6",
      },
      {
        type: "video",
        src: "/videos/case-studies/bhr2.mp4",
        alt: "RealReports property intelligence workflow",
        background: "#E5A4E6",
      },
      {
        type: "video",
        src: "/videos/case-studies/bhr3.mp4",
        alt: "RealReports property report experience",
        background: "#E5A4E6",
      },
      {
        type: "video",
        src: "/videos/case-studies/bhr4.mp4",
        alt: "RealReports data exploration experience",
        background: "#E5A4E6",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
