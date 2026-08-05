"use client";

import { useEffect, useRef, useState } from "react";
import { BUSINESS_NAME, CTA, PHONE_DISPLAY, PHONE_TEL, SECTION_NAV } from "@/lib/constants";
import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import { CloseIcon, MenuIcon } from "../ui/icons";

// Header/NavBar (UPDATED — design-system.md §6 / wireframes.md §0).
// Sticky-fixed at every breakpoint (a change from the prior desktop-only
// sticky pattern). Two states:
//  - `transparent` (default, over the hero): no background of its own —
//    legibility guaranteed by Hero/Slider's own full-height frost-media-bg
//    scrim underneath. Logo + nav links render white.
//  - `solid`/frosted (past the hero): frost-light-bg + blur + shadow-frost,
//    logo + nav links switch to ink.
// The threshold is driven by an IntersectionObserver on the hero's own
// bottom-edge sentinel (#hero-bottom-sentinel), not a fixed scroll pixel
// value, per the exact spec in design-system.md §6.
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const [navHeight, setNavHeight] = useState(80);
  const headerRef = useRef<HTMLElement>(null);

  // Measure the header's own rendered height so the IntersectionObserver
  // threshold below always matches the nav's real height at the current
  // breakpoint (64px mobile / 80px desktop) instead of hardcoding either.
  useEffect(() => {
    function measure() {
      if (headerRef.current) setNavHeight(headerRef.current.offsetHeight);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Transparent → solid/frosted threshold — driven by an IntersectionObserver
  // on the hero's own bottom-edge sentinel, not a fixed scroll pixel value,
  // per design-system.md §6.
  useEffect(() => {
    const sentinel = document.getElementById("hero-bottom-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sentinel sits at the hero's bottom edge. While it is still below
        // the (navHeight-offset) line, the nav is still overlapping the
        // hero → transparent. Once it scrolls above that line, the nav has
        // moved onto plain section content (no scrim) → solid.
        setSolid(entry ? !entry.isIntersecting : false);
      },
      { rootMargin: `-${navHeight}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [navHeight]);

  // Scrollspy — IntersectionObserver watching every section's anchor,
  // replacing the old "current page" URL-match logic (there is only one
  // URL now).
  useEffect(() => {
    const ids = ["hero", ...SECTION_NAV.map((l) => l.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b));
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const textColor = solid ? "text-ink" : "text-white";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-md focus:py-sm focus:text-white"
      >
        Skip to main content
      </a>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${solid ? "frost-nav" : "bg-transparent"}`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-lg lg:h-20">
            <a
              href="#hero"
              className={`rounded-sm text-h4 font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${textColor} ${
                solid
                  ? "focus-visible:outline-primary"
                  : "focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-primary"
              }`}
            >
              {BUSINESS_NAME}
            </a>

            <nav aria-label="Primary" className="hidden items-center gap-lg lg:flex">
              {SECTION_NAV.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`rounded-sm border-b-2 py-sm text-small lg:text-small-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      solid
                        ? `focus-visible:outline-primary hover:text-secondary-hover ${
                            isActive ? "border-secondary text-secondary" : "border-transparent text-ink"
                          }`
                        : `focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-primary hover:text-white ${
                            isActive
                              ? "border-white text-white"
                              : "border-transparent text-white/85"
                          }`
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-md lg:flex">
              <a
                href={PHONE_TEL}
                className={`rounded-sm text-phone font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  solid
                    ? "text-primary hover:text-secondary-hover focus-visible:outline-primary"
                    : "text-white hover:text-white/80 focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-primary"
                }`}
              >
                {PHONE_DISPLAY}
              </a>
              <CallCTA label={CTA.standard} size="compact" />
            </div>

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-overlay"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className={`flex h-11 w-11 items-center justify-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden ${
                solid
                  ? "text-ink focus-visible:outline-primary"
                  : "text-white focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-primary"
              }`}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </Container>
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 top-16 z-30 overflow-y-auto bg-primary shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-2xs p-md">
            <a
              href="#hero"
              onClick={() => setMobileOpen(false)}
              className="rounded-sm border-b border-white/10 py-sm text-h4 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-primary"
            >
              Home
            </a>
            {SECTION_NAV.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-sm border-b border-white/10 py-sm text-h4 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="mt-md rounded-sm text-center text-phone-lg font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-primary"
            >
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
