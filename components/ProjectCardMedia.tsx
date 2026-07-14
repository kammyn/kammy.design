"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type ProjectCardMediaProps = {
  image: string;
  hoverImage?: string;
  title: string;
};

export function ProjectCardMedia({
  image,
  hoverImage,
  title,
}: ProjectCardMediaProps) {
  const [hovered, setHovered] = useState(false);
  const [hoverKey, setHoverKey] = useState(0);

  return (
    <div
      className="relative h-[212px] w-full shrink-0 overflow-hidden rounded-lg bg-accent/5"
      onMouseEnter={() => {
        setHovered(true);
        setHoverKey((key) => key + 1);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={image}
        alt=""
        fill
        unoptimized
        className={cn(
          "object-cover transition-opacity duration-300",
          hovered && hoverImage ? "opacity-0" : "opacity-100",
        )}
        sizes="(max-width: 743px) 100vw, (max-width: 1023px) 50vw, 25vw"
      />

      {hoverImage && hovered ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={hoverKey}
          src={hoverImage}
          alt={`${title} preview`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}
