import { cn } from "@/lib/cn";
import { starPanels } from "@/lib/starPanels";

type ContentPanelProps = {
  variant?: "star" | "solid";
  className?: string;
};

const panelVisibility: Record<(typeof starPanels)[number]["id"], string> = {
  mobile: "max-[743px]:block min-[744px]:hidden",
  tablet: "hidden min-[744px]:block lg:hidden",
  "ipad-pro": "hidden",
  "1280": "hidden lg:block 2xl:hidden",
  desktop: "hidden 2xl:block",
};

export function ContentPanel({
  variant = "solid",
  className,
}: ContentPanelProps) {
  if (variant === "star") {
    return (
      <div
        className={cn("pointer-events-none absolute inset-0", className)}
        aria-hidden
      >
        {starPanels.map(({ id, viewBox, path }) => (
          <svg
            key={id}
            className={cn("absolute inset-0 size-full", panelVisibility[id])}
            viewBox={viewBox}
            preserveAspectRatio="none"
          >
            <path
              d={path}
              className="fill-cream"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden>
      <div className="size-full rounded-2xl bg-cream" />
    </div>
  );
}
