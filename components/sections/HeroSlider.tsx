"use client";

import { TouchEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import TrustBadge from "../ui/Badge";
import { ChevronLeftIcon, ChevronRightIcon } from "../ui/icons";
import { VALUE_PROPS } from "@/lib/constants";

// Hero/Slider — design-system.md §6 / wireframes.md §1. Real client-supplied
// photography (public/hero/), replacing the original honest gradient
// placeholders. Captions describe what's actually shown in each photo
// rather than force-labeling every slide into a specific service category.
const SLIDES = [
  {
    id: "repair",
    src: "/hero/slider-3.png",
    alt: "EY Plumbing Solution technician installing a water filtration system under a sink",
    caption: "Plumbing Repair & Installation",
  },
  {
    id: "installation",
    src: "/hero/slide-1.png",
    alt: "A completed bathroom plumbing installation",
    caption: "Bathroom Installations",
  },
  {
    id: "drain-emergency",
    src: "/hero/slider-2.jpeg",
    alt: "EY Plumbing Solution crew working on-site in Accra",
    caption: "On-Site in Accra",
  },
] as const;

// Default auto-advance interval — flagged in design-system.md Open
// Questions as needing the client's actual timing preference.
const AUTO_ADVANCE_MS = 6000;
const SWIPE_THRESHOLD_PX = 40;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const onChange = () => setReducedMotion(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Auto-advance — disabled entirely under prefers-reduced-motion: reduce
  // (Slide 1 stays static); pauses on hover/focus (desktop) and while a
  // touch/drag gesture is active (mobile), per design-system.md §6.
  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, paused]);

  function goTo(next: number) {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }

  function handleTouchStart(e: TouchEvent<HTMLElement>) {
    const t = e.touches[0];
    if (!t) return;
    touchStartRef.current = { x: t.clientX, y: t.clientY };
    setPaused(true);
  }

  function handleTouchEnd(e: TouchEvent<HTMLElement>) {
    const start = touchStartRef.current;
    const t = e.changedTouches[0];
    touchStartRef.current = null;
    setPaused(false);
    if (!start || !t) return;
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > SWIPE_THRESHOLD_PX && Math.abs(dx) > Math.abs(dy)) {
      goTo(index + (dx < 0 ? 1 : -1));
    }
  }

  const slide = SLIDES[index]!;

  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <div
        className="relative flex min-h-[min(100svh_-_64px,640px)] flex-col justify-center py-3xl lg:min-h-[90vh] lg:max-h-[800px] lg:py-4xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background slides */}
        <div aria-hidden="true" className="absolute inset-0 bg-primary">
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Frost/Media scrim — full-bleed, full-hero-height (design-system.md
            §2b), not a thin band behind just the nav. This uniform scrim is
            what makes Header/NavBar's transparent "no background of its own"
            state safe: legibility is guaranteed by this scrim, worst-case
            5.41:1 for white text/icons. */}
        <div aria-hidden="true" className="frost-media absolute inset-0" />

        <Container className="relative z-10">
          <div className="mx-auto flex max-w-[720px] flex-col items-start gap-md text-left">
            <h1 id="hero-heading" className="text-h1 lg:text-h1-lg font-extrabold text-white">
              Your Plumber in Accra, Ghana — Call Anytime
            </h1>
            <p className="text-body-lg lg:text-body-lg-lg text-white">
              EY Plumbing Solution handles repairs, installations, and drain maintenance across
              Greater Accra — plus emergency call-outs, day or night. Call us directly, no call
              center.
            </p>
            <CallCTA label="Call 055 703 2986 Now" />
          </div>
        </Container>

        {/* Manual controls — desktop/tablet only (sm+); mobile relies on
            swipe + dots (style-guide.md §7). 70% idle opacity, full opacity
            on hover/focus per design-system.md §6. */}
        <div className="absolute inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-between px-md sm:flex">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(index - 1)}
            className="frost-media flex h-11 w-11 items-center justify-center rounded-full border border-frost-media-border text-white opacity-70 shadow-frost transition-opacity duration-150 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronLeftIcon width={22} height={22} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(index + 1)}
            className="frost-media flex h-11 w-11 items-center justify-center rounded-full border border-frost-media-border text-white opacity-70 shadow-frost transition-opacity duration-150 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronRightIcon width={22} height={22} />
          </button>
        </div>

        {/* Dot indicators — all breakpoints, 44x44px min tap target. */}
        <div className="relative z-10 mt-lg flex items-center justify-center gap-xs sm:absolute sm:inset-x-0 sm:bottom-lg sm:mt-0">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => goTo(i)}
              className="flex h-11 w-11 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span
                className={`block h-2.5 w-2.5 rounded-full border ${
                  i === index ? "border-white bg-white" : "border-white/85 bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Caption — carries the placeholder's informational content; slide
            icons use alt="" (decorative), per style-guide.md §4. */}
        <p className="relative z-10 mt-sm text-center text-small text-white/85 sm:absolute sm:bottom-lg sm:left-0 sm:mt-0 sm:text-left sm:pl-md">
          {slide.caption}
        </p>

        {/* Sentinel for Header/NavBar's IntersectionObserver — marks the
            exact bottom edge of the hero so the nav switches from
            transparent to solid/frosted exactly when it stops overlapping
            the hero (design-system.md §6), not at a fixed pixel value. */}
        <div id="hero-bottom-sentinel" aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px" />
      </div>

      {/* Value Props strip — below the slider, NOT overlaid; solid slate-50
          backing for legibility (wireframes.md §1). Reuses Badge/TrustSignal
          with the same 4 currently-confirmable claims as before; a 5th badge
          is reserved but not rendered pending licensing/years-in-business. */}
      <div className="bg-slate-50 py-xl">
        <Container>
          <div className="flex flex-col items-stretch gap-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            {VALUE_PROPS.map((prop) => (
              <TrustBadge key={prop.title}>{prop.title}</TrustBadge>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
