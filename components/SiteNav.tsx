"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = "work" | "services" | "about";

const navLinks: { label: string; href: string; key: NavItem }[] = [
  { label: "WORK", href: "/work", key: "work" },
  { label: "SERVICES", href: "/services", key: "services" },
  { label: "ABOUT", href: "/about", key: "about" },
];

type SiteNavProps = {
  active?: NavItem;
  className?: string;
};

export function SiteNav({ active, className }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  const mobileMenu =
    menuOpen && mounted
      ? createPortal(
          <>
            <button
              type="button"
              className="mobile-menu-backdrop fixed inset-0 z-40 bg-cream/55 backdrop-blur-[2px] lg:hidden"
              aria-label="Close menu"
              onClick={closeMenu}
            />

            <nav
              className="mobile-menu-panel fixed inset-y-0 right-0 z-50 flex w-[min(18rem,82vw)] flex-col bg-cream/90 px-8 pb-10 pt-24 shadow-[-8px_0_32px_rgba(0,0,0,0.06)] backdrop-blur-md lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map(({ label, href, key }) =>
                  active === key ? (
                    <span
                      key={key}
                      className="py-3 font-sans text-lg font-medium text-accent"
                    >
                      {label}
                    </span>
                  ) : (
                    <Link
                      key={key}
                      href={href}
                      className="py-3 font-sans text-lg font-medium text-accent transition-opacity hover:opacity-70"
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  ),
                )}
              </div>

              <div className="mt-auto flex items-center gap-3 pt-8">
                <span className="font-sans text-sm text-accent/60">Theme</span>
                <ThemeToggle />
              </div>
            </nav>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <header className={cn("relative z-[60] w-full", className)}>
        <nav className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="block shrink-0 rotate-180"
            aria-label="Home"
            onClick={closeMenu}
          >
            <Image
              src="/images/home/logo-star.svg"
              alt=""
              width={60}
              height={41}
              priority
              className="h-auto w-9 sm:w-10 lg:w-[60px]"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex lg:gap-10">
            {navLinks.map(({ label, href, key }) =>
              active === key ? (
                <span
                  key={key}
                  className="font-sans text-base font-medium text-accent"
                >
                  {label}
                </span>
              ) : (
                <Link
                  key={key}
                  href={href}
                  className="font-sans text-base font-medium text-accent transition-opacity hover:opacity-70"
                >
                  {label}
                </Link>
              ),
            )}
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="relative z-[60] flex flex-col justify-center gap-1.5 p-2 lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-accent transition-transform duration-300",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-accent transition-opacity duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-accent transition-transform duration-300",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </nav>
      </header>

      {mobileMenu}
    </>
  );
}
