import { ReactNode } from "react";
import { ChevronIcon, MapPinIcon } from "./icons";
import Surface from "./Surface";

// Card/Service (UPDATED — now Frost/Light, design-system.md §6) — the
// #services section's 3 teaser cards. No longer links to a separate page;
// now a real <button> that triggers its own Accordion/ServiceDetail panel
// (see ServicesSection.tsx, which owns the open/closed state per card).
export function ServiceTeaser({
  icon,
  title,
  description,
  expanded,
  onToggle,
  panelId,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  expanded: boolean;
  onToggle: () => void;
  panelId: string;
}) {
  return (
    <Surface
      as="button"
      type="button"
      interactive
      aria-expanded={expanded}
      aria-controls={panelId}
      onClick={onToggle}
      className="flex w-full flex-col items-start gap-sm p-md text-left"
    >
      <span className="text-secondary" aria-hidden="true">
        {icon}
      </span>
      <h3 className="text-h3 font-bold text-ink">{title}</h3>
      <p className="text-body text-ink-muted">{description}</p>
      <span className="mt-2xs inline-flex items-center gap-2xs text-body font-medium text-secondary">
        See Full Details
        <ChevronIcon
          className={`transition-transform duration-150 ${expanded ? "rotate-180" : ""}`}
          width={18}
          height={18}
        />
      </span>
    </Surface>
  );
}

// Card/TownArea (UPDATED — now Frost/Light) — all 8 town cards render
// together in #service-areas (design-system.md §6). The "Nearby Areas"
// cross-link sub-component from Revision 1 is retired — all 8 towns are
// already simultaneously visible in this one grid.
export function TownAreaCard({
  name,
  intro,
  hasDetailedCopy,
}: {
  name: string;
  intro: string;
  hasDetailedCopy: boolean;
}) {
  return (
    <Surface className="flex flex-col gap-xs p-md">
      <MapPinIcon className="text-secondary" aria-hidden="true" />
      <h4 className="text-h4 font-semibold text-ink">Plumber in {name}, Accra</h4>
      <p className="text-small lg:text-small-lg text-ink-muted">
        Serving {name} &amp; surrounding area
      </p>
      <p className="text-body text-ink-muted">{intro}</p>
      <p className="mt-2xs text-small lg:text-small-lg text-slate-600">
        Proposed coverage area — pending client confirmation.
      </p>
      {hasDetailedCopy && (
        <span className="sr-only">
          Detailed local copy for this town has been confirmed; the other 7 areas share a general
          template.
        </span>
      )}
    </Surface>
  );
}

// Card/Testimonial (UPDATED — now Frost/Light for future populated state).
export function TestimonialCard({ quote, name, area }: { quote: string; name: string; area: string }) {
  return (
    <Surface className="flex flex-col gap-sm p-md">
      <p className="text-body text-ink">&ldquo;{quote}&rdquo;</p>
      <p className="text-small lg:text-small-lg text-ink-muted">
        {name}, {area}
      </p>
    </Surface>
  );
}

// Empty/placeholder state — intentionally plain/undecorated, NOT frosted
// (design-system.md §6: "an empty-state block frosting itself would
// visually overclaim 'there's something here'"). No real testimonials
// exist yet; no invented quotes, names, or star ratings.
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
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path d="M12 2s6 7.2 6 11.5a6 6 0 1 1-12 0C6 9.2 12 2 12 2z" />
      </svg>
    </span>
  );
}
