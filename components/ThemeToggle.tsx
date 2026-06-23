"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored === "dark" || (!stored && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-1"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Image src="/images/home/icon-sun.svg" alt="" width={18} height={17} />
      <Image
        src="/images/home/icon-toggle.svg"
        alt=""
        width={24}
        height={24}
        className={isDark ? "rotate-180" : ""}
      />
      <Image src="/images/home/icon-moon.svg" alt="" width={16} height={16} />
    </button>
  );
}
