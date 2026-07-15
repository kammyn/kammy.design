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
      className={cn(
        "relative shrink-0 transition-transform duration-300 ease-out",
        hovered && "-translate-y-1.5",
      )}
      onMouseEnter={() => {
        setHovered(true);
        setHoverKey((key) => key + 1);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-[212px] w-full overflow-hidden rounded-lg bg-accent/5">
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          className={cn(
            "object-cover transition-[opacity,transform] duration-300 ease-out",
            hovered && "scale-[1.04]",
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
            className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
          />
        ) : null}
      </div>
    </div>
  );
}
