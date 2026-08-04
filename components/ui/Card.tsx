import Link from "next/link";
import { ReactNode } from "react";
import { MapPinIcon } from "./icons";

// Card/Service — Home "Services Preview" + Services Hub grid
// (design-system.md §6): default/hover/focus/active states via Tailwind
// pseudo-classes (no client JS needed for a static hover/focus treatment).
export function ServiceCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-sm rounded-md border border-border bg-surface-alt p-md shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-secondary hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-0 active:shadow-sm"
    >
      <span className="text-secondary" aria-hidden="true">
        {icon}
      </span>
      <h3 className="text-h3 font-bold text-ink">{title}</h3>
      <p className="text-body text-ink-muted">{description}</p>
      <span className="mt-2xs text-body font-medium text-secondary group-hover:text-secondary-hover group-hover:underline">
        Learn More →
      </span>
    </Link>
  );
}

// Card/TownArea — Service Areas hub grid + Town Page "Nearby Areas".
export function TownAreaCard({
  href,
  name,
  compact = false,
}: {
  href: string;
  name: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <Link
        href={href}
        className="flex items-center gap-xs rounded-sm border border-border bg-surface-alt px-md py-sm text-body font-medium text-ink transition-colors hover:border-secondary hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <MapPinIcon className="text-secondary shrink-0" width={18} height={18} />
        {name}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col gap-xs rounded-md border border-border bg-surface-alt p-md shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-secondary hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-0 active:shadow-sm"
    >
      <MapPinIcon className="text-secondary" aria-hidden="true" />
      <h4 className="text-h4 font-semibold text-ink">{name}</h4>
      <p className="text-small lg:text-small-lg text-ink-muted">
        Serving {name} &amp; surrounding area
      </p>
      <span className="mt-2xs text-small lg:text-small-lg font-medium text-secondary group-hover:underline">
        View details →
      </span>
    </Link>
  );
}

// Card/Testimonial — currently ships in its empty state only (no real
// testimonials exist yet, design-system.md §6 / homepage.md §6). The
// populated-state markup is included so Development doesn't have to
// rebuild layout later, but is not rendered anywhere at launch.
export function TestimonialEmptyState() {
  return (
    <div className="mx-auto flex max-w-[600px] flex-col items-center gap-sm rounded-md border border-border bg-surface-alt px-lg py-3xl text-center shadow-sm">
      <DropletBadge />
      <p className="text-h4 font-semibold text-ink">New reviews coming soon</p>
      <p className="text-body text-ink-muted">
        We&apos;re collecting customer feedback as jobs are completed. Check back soon, or call us
        directly to ask for a reference.
      </p>
    </div>
  );
}

function DropletBadge() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-tint text-secondary">
      <MapPinIcon width={22} height={22} className="hidden" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M12 2s6 7.2 6 11.5a6 6 0 1 1-12 0C6 9.2 12 2 12 2z" />
      </svg>
    </span>
  );
}

export function TestimonialCard({
  quote,
  name,
  area,
}: {
  quote: string;
  name: string;
  area: string;
}) {
  return (
    <div className="flex flex-col gap-sm rounded-md border border-border bg-surface-alt p-md shadow-sm">
      <p className="text-body text-ink">&ldquo;{quote}&rdquo;</p>
      <p className="text-small lg:text-small-lg text-ink-muted">
        {name}, {area}
      </p>
    </div>
  );
}
