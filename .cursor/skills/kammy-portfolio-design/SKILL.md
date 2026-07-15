---
name: kammy-portfolio-design
description: >-
  Applies Kammy Nguyen portfolio (kammy.design / kammy-portfolio) visual design
  tokens, type hierarchy, panel shell, theme behavior, and interaction patterns.
  Use when editing this portfolio site UI, themes, nav, work cards, case studies
  chrome, about page, footer, or when the user mentions light/dark mode, cream
  panel, headings vs accents, or Selected Works hover treatment.
---

# Kammy Portfolio Design System

Project: `kammy-portfolio` (Next.js App Router + Tailwind 4).

## Color roles (do not collapse these)

### Light mode (`:root`)
| Token | Value | Use for |
|-------|-------|---------|
| `--cream` / UI panel | `#F7F3E7` | Opaque panel fill (never translucent) |
| `--heading` | `#2B3FA8` | Headings, nav labels, section labels (OVERVIEW, EXPERIENCE), case study titles |
| `--accent` | `#4862E8` | Logo sparkle, cursor trail, theme icons, link hover, active emphasis |
| `--accent-text` (+ muted/subtle) | `#35322D` | Body copy, categories, back links default |

### Dark mode (`html.dark`)
| Token | Value | Use for |
|-------|-------|---------|
| `--cream` / UI panel | `#0D203C` | Opaque panel fill |
| Heading / accent / body | `#FFFFFF` | Text, logo, sparkles, nav |

Map in `@theme inline` as `--color-heading`, `--color-accent`, `--color-accent-text`, `--color-cream`. Enable class dark with:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## Type hierarchy

- **Headings / page titles**: `text-heading` + editorial or sans bold as existing
- **Section labels** (OVERVIEW, INSIGHT, EXPERIENCE, categories when header-styled):  
  `font-sans text-sm font-medium uppercase tracking-wide text-heading`
- **Body**: `text-accent-text` + `font-sans`
- **Link hover** (nav, View Project, back link):  
  `transition-colors hover:text-accent` (default stays heading or body charcoal)

Do **not** underline non-links (reads as clickable). Prefer bold for emphasis in bio.

## Panel / chrome

- Outer landscape: daybg light / nightbg dark (`BackgroundAura` / `public/images/daybg.png` + `nightbg.png`)
- Panel radius: **16px** all breakpoints (`.page-panel--solid` + ContentPanel cream fill)
- Panel fill: solid `bg-cream` — never `/95` opacity
- Top nav padding desktop: **24px** top, **40px** sides (`.page-panel__nav`)
- Footer: copyright only, white, right-aligned flush to panel width, **8px** from viewport bottom
- Case study side arrows: Phosphor Duotone ArrowCircleLeft/Right, white, outside panel gutters; no hover label text unless requested

## Work cards

- Cover hover: slight float (`-translate-y-1.5`) + soft zoom (`scale-[1.04]`)
- Title hover: `group-hover:text-accent`
- No orbiting sparkle trail unless explicitly re-requested

## Content sources

| Concern | File |
|---------|------|
| Theme tokens | `app/globals.css` |
| Projects order / covers | `lib/projects.ts` |
| Case study sections / media | `lib/caseStudies.ts` |
| Resume | `lib/resume.ts` |
| About copy | `app/about/page.tsx` |
| Nav + Contact / LinkedIn | `components/SiteNav.tsx` |
| Contact | `mailto:kammynx@gmail.com` |
| LinkedIn | `https://www.linkedin.com/in/kammyn` |

## Rules of thumb

1. Preserve established layout/visual language; small token edits over new systems.
2. Match case-study section-label styling when the user asks for “header style.”
3. Prefer the three-token light palette (charcoal / ultramarine / cobalt) over a single color.
4. Keep interactions intentional and few — presence, not noise.
