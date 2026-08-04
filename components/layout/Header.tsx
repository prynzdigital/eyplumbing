"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BUSINESS_NAME, CTA, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import { ChevronIcon, CloseIcon, MenuIcon } from "../ui/icons";

// Header/NavBar — design-system.md §6 / wireframes.md §0.
// Desktop (lg+): sticky-fixed top bar with dropdowns + CallCTA (this alone
// satisfies "always reachable" on desktop, no separate bottom bar).
// Mobile (base): static bar, hamburger opens a full-screen overlay nav; the
// phone/CTA lives in the bottom Bar/StickyEmergencyCall instead so there
// aren't two competing call buttons on a small screen.
export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-md focus:py-sm focus:text-white"
      >
        Skip to main content
      </a>
      <header
        className={`sticky top-0 z-40 hidden border-b border-border bg-surface-alt lg:block ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between gap-lg">
            <Link href="/" className="text-h4-lg font-bold text-primary">
              {BUSINESS_NAME}
            </Link>
            <nav aria-label="Primary" className="flex items-center gap-lg">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2xs py-sm text-body font-medium transition-colors hover:text-secondary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                        isActive(pathname, link.href) ? "border-b-2 border-secondary text-secondary" : "text-ink"
                      }`}
                    >
                      {link.label}
                      <ChevronIcon width={14} height={14} aria-hidden="true" />
                    </Link>
                    <div className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-md border border-border bg-surface-alt py-xs opacity-0 shadow-md transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-md py-xs text-body text-ink hover:bg-sky-tint hover:text-secondary-hover focus-visible:bg-sky-tint focus-visible:outline-none"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-sm text-body font-medium transition-colors hover:text-secondary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary ${
                      isActive(pathname, link.href) ? "border-b-2 border-secondary text-secondary" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
            <div className="flex items-center gap-md">
              <a
                href={PHONE_TEL}
                className="text-phone-lg font-bold text-primary hover:text-secondary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                {PHONE_DISPLAY}
              </a>
              <CallCTA label={CTA.standard} size="compact" />
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile header is static (not sticky) per wireframes.md §0 — the
          bottom Bar/StickyEmergencyCall carries persistent-visibility duty
          on small screens instead, avoiding two fixed bars stacking. */}
      <header className="relative z-40 border-b border-border bg-surface-alt lg:hidden">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-overlay"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            <Link href="/" className="text-h4 font-bold text-primary">
              {BUSINESS_NAME}
            </Link>
            <span className="w-11" aria-hidden="true" />
          </div>
        </Container>
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 top-16 z-30 overflow-y-auto bg-primary lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-2xs p-md">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="border-b border-white/10 py-xs">
                <Link
                  href={link.href}
                  className="block py-sm text-h4 font-semibold text-white"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="flex flex-col gap-2xs pb-xs pl-md">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2xs text-body text-white/80 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={PHONE_TEL}
              className="mt-md text-center text-phone-lg font-bold text-white"
            >
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
