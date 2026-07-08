import { BackgroundAura } from "@/components/BackgroundAura";
import { ContentPanel } from "@/components/ContentPanel";
import { SiteNav } from "@/components/SiteNav";
import { cn } from "@/lib/cn";

type PageFrameProps = {
  children: React.ReactNode;
  panelVariant?: "star" | "solid";
  active?: "work" | "about";
};

export function PageFrame({
  children,
  panelVariant = "solid",
  active,
}: PageFrameProps) {
  return (
    <div className="relative min-h-svh w-full overflow-hidden">
      <div className="absolute inset-0 bg-cream">
        <BackgroundAura />
      </div>

      <div
        className={cn(
          "page-panel",
          panelVariant === "star" ? "page-panel--star" : "page-panel--solid",
        )}
      >
        <ContentPanel variant={panelVariant} />

        <SiteNav active={active} className="page-panel__nav" />

        <div className="page-panel__content">{children}</div>
      </div>
    </div>
  );
}
