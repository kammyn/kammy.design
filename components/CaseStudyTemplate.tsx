import Image from "next/image";
import Link from "next/link";
import { CaseStudyScrollColumn } from "@/components/CaseStudyScrollColumn";
import type { CaseStudy, CaseStudyImage, CaseStudyMediaRow } from "@/lib/caseStudies";
import { cn } from "@/lib/cn";

type CaseStudyTemplateProps = {
  study: CaseStudy;
};

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function CaseStudyTemplate({ study }: CaseStudyTemplateProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden">
      <Link
        href="/work"
        className="group inline-flex w-fit shrink-0 items-center gap-2 font-editorial text-base italic text-accent-text"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="transition-transform group-hover:-translate-x-0.5"
        >
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back To Selected Work
      </Link>

      <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-hidden lg:grid lg:grid-cols-[minmax(0,394px)_1fr] lg:gap-10">
        <CaseStudyScrollColumn className="pr-1">
          <div className="flex flex-col gap-8 pb-2 lg:gap-10">
            <header className="flex max-w-[335px] flex-col gap-8 text-accent-text">
              <div className="flex flex-col gap-2 text-accent">
                <h1 className="font-editorial text-[clamp(1.75rem,2.5vw,2rem)] not-italic leading-tight">
                  {toTitleCase(study.title)}
                </h1>
                <p className="font-editorial text-[clamp(1.125rem,1.8vw,1.5rem)] not-italic leading-snug">
                  {study.subtitle}
                </p>
              </div>
              <p className="font-editorial text-base not-italic">{study.category}</p>
            </header>

            <div className="flex max-w-[394px] flex-col gap-10">
              {study.sections.map((section, index) => (
                <div key={section.label}>
                  {index > 0 && (
                    <hr className="mb-10 border-0 border-t border-accent-text-muted/25" />
                  )}
                  <section className="flex flex-col gap-2 text-accent-text">
                    <h2 className="font-sans text-sm font-medium tracking-wide text-accent-text">
                      {section.label}
                    </h2>
                    {section.bullets && section.bullets.length > 0 ? (
                      <ul className="list-disc space-y-0 pl-6 font-sans text-base leading-6">
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : section.body ? (
                      <p className="font-sans text-base leading-6">{section.body}</p>
                    ) : (
                      <p className="font-sans text-base leading-6 text-accent-text-subtle">
                        Content coming soon.
                      </p>
                    )}
                  </section>
                </div>
              ))}
            </div>
          </div>
        </CaseStudyScrollColumn>

        <CaseStudyScrollColumn className="flex flex-col gap-4 pb-2">
          {study.images.map((item, index) =>
            isMediaRow(item) ? (
              <div
                key={`${study.slug}-media-row-${index}`}
                className="grid grid-cols-2 gap-4"
              >
                {item.items.map((media, mediaIndex) => (
                  <CaseStudyMedia
                    key={`${study.slug}-media-${index}-${mediaIndex}`}
                    media={media}
                  />
                ))}
              </div>
            ) : (
              <CaseStudyMedia
                key={`${study.slug}-media-${index}`}
                media={item}
              />
            ),
          )}
        </CaseStudyScrollColumn>
      </div>
    </div>
  );
}

function isMediaRow(item: CaseStudy["images"][number]): item is CaseStudyMediaRow {
  return "layout" in item && item.layout === "row";
}

function isVideoMedia(media: CaseStudyImage): boolean {
  if (media.type === "video") return true;
  if (media.type === "image") return false;
  return Boolean(media.src?.match(/\.(mp4|webm|mov)(\?|$)/i));
}

function isAnimatedMedia(src: string): boolean {
  return /\.(gif|webp)(\?|$)/i.test(src);
}

function CaseStudyMedia({ media }: { media: CaseStudyImage }) {
  const isVideo = isVideoMedia(media);
  const isAnimated = Boolean(media.src && isAnimatedMedia(media.src));
  const fit = media.fit ?? (isVideo || isAnimated ? "contain" : "cover");

  return (
    <div
      className={cn(
        "relative w-full shrink-0 overflow-hidden rounded-2xl",
        !media.aspectRatio && "aspect-[674/325]",
        !media.src && "bg-[#d9d9d9]",
        !media.background &&
          (isVideo || isAnimated) &&
          fit === "contain" &&
          "bg-white",
      )}
      style={{
        ...(media.background ? { backgroundColor: media.background } : {}),
        ...(media.aspectRatio ? { aspectRatio: media.aspectRatio } : {}),
      }}
    >
      {media.src ? (
        isVideo ? (
          <video
            src={media.src}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={media.alt ?? "Product demo"}
            className={cn(
              "absolute inset-0 h-full w-full",
              fit === "contain" ? "object-contain" : "object-cover",
            )}
          />
        ) : isAnimated ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.src}
            alt={media.alt ?? ""}
            className={cn(
              "absolute inset-0 h-full w-full",
              fit === "contain" ? "object-contain" : "object-cover",
            )}
          />
        ) : (
          <Image
            src={media.src}
            alt={media.alt ?? ""}
            fill
            className={fit === "contain" ? "object-contain" : "object-cover"}
            sizes="(max-width: 1024px) 100vw, 674px"
            unoptimized={media.unoptimized}
          />
        )
      ) : null}
    </div>
  );
}
