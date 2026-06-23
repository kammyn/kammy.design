import { ContentPanel } from "@/components/ContentPanel";
import { SiteNav } from "@/components/SiteNav";
import { cn } from "@/lib/cn";

type PageFrameProps = {
  children: React.ReactNode;
  panelVariant?: "star" | "solid";
  active?: "work" | "services" | "about";
};

export function PageFrame({
  children,
  panelVariant = "solid",
  active,
}: PageFrameProps) {
  return (
    <div className="relative min-h-svh w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/bg-landscape.jpg"
          alt=""
          className="size-full object-cover object-center"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/bg-overlay.png"
          alt=""
          className="absolute inset-0 size-full object-cover object-center opacity-90 mix-blend-multiply"
        />
      </div>

      <div
        className={cn(
          "absolute z-10 flex flex-col overflow-hidden",
          "inset-3 sm:inset-4",
          "lg:left-[max(1.5rem,calc((100%-1280px)/2))] lg:right-[max(1.5rem,calc((100%-1280px)/2))] lg:top-[3.56%] lg:bottom-auto lg:aspect-[1280/836] lg:max-h-[min(836px,calc(100svh-7%))]",
        )}
      >
        <ContentPanel variant={panelVariant} />

        <SiteNav
          active={active}
          className="relative z-10 shrink-0 px-6 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10"
        />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col px-6 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-10">
          {children}
        </div>
      </div>
    </div>
  );
}
