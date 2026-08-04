import { PHONE_TEL } from "@/lib/constants";

// Button/CallCTA — the single most important component on the site
// (design-system.md §6). Always a live tel: link, never conditionally
// disabled. `inverted` renders the Band/Emergency variant (white bg,
// accent text) for use inside an already-accent-colored section.
export default function CallCTA({
  label,
  inverted = false,
  fullWidth = false,
  size = "default",
  className = "",
}: {
  label: string;
  inverted?: boolean;
  fullWidth?: boolean;
  size?: "default" | "compact";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm font-sans text-button lg:text-button-lg transition-colors duration-150 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white focus-visible:ring-2 focus-visible:ring-primary";
  const sizing =
    size === "compact"
      ? "min-h-[44px] px-lg"
      : "min-h-[48px] lg:min-h-[44px] px-lg";
  const palette = inverted
    ? "bg-white text-accent hover:bg-white/90"
    : "bg-accent text-white hover:bg-accent-hover active:bg-accent-active shadow-sm";
  const width = fullWidth ? "w-full" : "";

  return (
    <a href={PHONE_TEL} className={`${base} ${sizing} ${palette} ${width} ${className}`}>
      <PhoneIcon />
      <span>{label}</span>
    </a>
  );
}

function PhoneIcon() {
  return (
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
      className="shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
