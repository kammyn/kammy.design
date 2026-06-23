"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CaseStudyScrollColumnProps = {
  children: React.ReactNode;
  className?: string;
};

export function CaseStudyScrollColumn({
  children,
  className,
}: CaseStudyScrollColumnProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fadeTop, setFadeTop] = useState(false);
  const [fadeBottom, setFadeBottom] = useState(false);

  const updateFades = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const canScroll = scrollHeight > clientHeight + 1;

    setFadeTop(canScroll && scrollTop > 4);
    setFadeBottom(canScroll && scrollTop + clientHeight < scrollHeight - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateFades();

    el.addEventListener("scroll", updateFades, { passive: true });

    const observer = new ResizeObserver(updateFades);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateFades);
      observer.disconnect();
    };
  }, [updateFades]);

  return (
    <div className="relative min-h-0 flex-1">
      <div
        ref={scrollRef}
        className={cn(
          "case-study-scroll h-full overflow-y-auto overscroll-contain",
          className,
        )}
      >
        {children}
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-cream to-transparent transition-opacity duration-200",
          fadeTop ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-cream to-transparent transition-opacity duration-200",
          fadeBottom ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
