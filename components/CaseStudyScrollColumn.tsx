"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
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
    setFadeBottom(canScroll && scrollTop + clientHeight < scrollHeight - 1);
  }, []);

  useLayoutEffect(() => {
    updateFades();
  }, [updateFades]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateFades();

    el.addEventListener("scroll", updateFades, { passive: true });

    const observer = new ResizeObserver(updateFades);
    observer.observe(el);
    if (el.firstElementChild) {
      observer.observe(el.firstElementChild);
    }

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
          "case-study-scroll h-full max-w-full overflow-x-hidden overflow-y-auto overscroll-contain",
          fadeTop && "case-study-scroll--fade-top",
          fadeBottom && "case-study-scroll--fade-bottom",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
