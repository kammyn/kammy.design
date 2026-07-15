"use client";

import Link from "next/link";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { LogoSparkle } from "./LogoSparkle";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = "work" | "about";

const navLinks: { label: string; href: string; key: NavItem }[] = [
  { label: "WORK", href: "/work", key: "work" },
  { label: "ABOUT", href: "/about", key: "about" },
];

const CONTACT_HREF = "mailto:kammynx@gmail.com";
const LINKEDIN_HREF = "https://www.linkedin.com/in/kammyn";

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
                      className="border-b-2 border-heading py-3 font-sans text-lg font-bold text-heading"
                    >
                      {label}
                    </span>
                  ) : (
                    <Link
                      key={key}
                      href={href}
                      className="py-3 font-sans text-lg font-medium text-heading transition-colors hover:text-accent"
                      onClick={closeMenu}
                    >
                      {label}
                    </Link>
                  ),
                )}
                <a
                  href={CONTACT_HREF}
                  className="py-3 font-sans text-lg font-medium text-heading transition-colors hover:text-accent"
                  onClick={closeMenu}
                >
                  CONTACT
                </a>
                <a
                  href={LINKEDIN_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-3 font-sans text-lg font-medium text-heading transition-colors hover:text-accent"
                  onClick={closeMenu}
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo weight="fill" size={22} />
                  LINKEDIN
                </a>
              </div>

              <div className="mt-auto flex items-center gap-3 pt-8">
                <span className="font-sans text-sm text-accent-text-muted">Theme</span>
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
            <LogoSparkle className="h-auto w-9 sm:w-10 lg:w-[60px]" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex lg:gap-10">
            {navLinks.map(({ label, href, key }) =>
              active === key ? (
                <span
                  key={key}
                  className="border-b-2 border-heading px-1 py-1 font-sans text-base font-bold text-heading"
                >
                  {label}
                </span>
              ) : (
                <Link
                  key={key}
                  href={href}
                  className="px-1 py-1 font-sans text-base font-medium text-heading transition-colors hover:text-accent"
                >
                  {label}
                </Link>
              ),
            )}
            <a
              href={CONTACT_HREF}
              className="px-1 py-1 font-sans text-base font-medium text-heading transition-colors hover:text-accent"
            >
              CONTACT
            </a>
            <a
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-heading transition-colors hover:text-accent"
            >
              <LinkedinLogo weight="fill" size={22} />
            </a>
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="relative z-[60] -mr-2 flex flex-col justify-center gap-1.5 p-2 lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-heading transition-transform duration-300",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-heading transition-opacity duration-300",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-heading transition-transform duration-300",
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
