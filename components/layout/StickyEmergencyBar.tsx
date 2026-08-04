import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

// Bar/StickyEmergencyCall — mobile-only, fixed to viewport bottom, never
// scrolls away (design-system.md §6 / wireframes.md §0). Superseded by the
// sticky Header/NavBar CTA on lg+ desktop.
export default function StickyEmergencyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-stretch bg-primary shadow-md lg:hidden">
      <a
        href={PHONE_TEL}
        className="flex flex-[0_0_60%] items-center px-md text-phone font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
      >
        {PHONE_DISPLAY}
      </a>
      <a
        href={PHONE_TEL}
        className="flex flex-[0_0_40%] items-center justify-center gap-2xs bg-accent text-button font-bold text-white transition-colors hover:bg-accent-hover active:bg-accent-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Now
      </a>
    </div>
  );
}
