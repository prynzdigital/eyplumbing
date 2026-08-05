// Outline/line-style icon set, 2px stroke — matches style-guide.md §5.
// Kept minimal and dependency-free (no icon package) for build reliability.
import { SVGProps } from "react";

function base(props: SVGProps<SVGSVGElement>) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function WrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6L2 19l3 3 7.1-7.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2-2z" />
    </svg>
  );
}

export function DropletIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M12 2s6 7.2 6 11.5a6 6 0 1 1-12 0C6 9.2 12 2 12 2z" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ChevronIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PipeWrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 4v6a2 2 0 0 0 2 2h4" />
      <path d="M14 20v-6a2 2 0 0 0-2-2h-4" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="7" r="3" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

// Hero/Slider manual controls — styled identically to ChevronIcon
// (style-guide.md §5: "styled identically to the existing chevron icon
// family so the icon set stays internally consistent").
export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function ImageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
