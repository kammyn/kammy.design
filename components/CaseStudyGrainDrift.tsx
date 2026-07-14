"use client";

import Image from "next/image";

type CaseStudyGrainDriftProps = {
  backgroundSrc: string;
  foregroundSrc?: string;
  alt: string;
  backgroundColor?: string;
};

export function CaseStudyGrainDrift({
  backgroundSrc,
  foregroundSrc,
  alt,
  backgroundColor = "#0B4444",
}: CaseStudyGrainDriftProps) {
  const isSplit = Boolean(foregroundSrc);

  return (
    <div
      className="case-study-grain-drift relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl"
      style={{ backgroundColor }}
    >
      <div className="absolute inset-[-12%] animate-przmatic-bg-drift relative">
        <Image
          src={backgroundSrc}
          alt={isSplit ? "" : alt}
          fill
          aria-hidden={isSplit}
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 329px"
          unoptimized
        />
      </div>

      <div aria-hidden className="case-study-grain-drift__grain case-study-grain-drift__grain--one" />
      <div aria-hidden className="case-study-grain-drift__grain case-study-grain-drift__grain--two" />

      {foregroundSrc ? (
        <div className="absolute inset-0 z-10 relative">
          <Image
            src={foregroundSrc}
            alt={alt}
            fill
            className="object-contain p-[12%]"
            sizes="(max-width: 1024px) 50vw, 329px"
            unoptimized
          />
        </div>
      ) : null}
    </div>
  );
}
