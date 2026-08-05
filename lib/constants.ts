// Single source of truth for business facts, NAP data, nav structure, and
// content-driven data (services, towns, FAQ, testimonials/gallery state).
// Sourced verbatim from 00-brief.md, 02-seo/*, 03-content/* — do not hardcode
// duplicates of these values elsewhere in the app.
//
// REVISION (single-page architecture pivot, 04-design/wireframes.md Rev 2 /
// 02-seo/*.md Stage 2c): the site collapsed from 19 routes to 1 (`/`) with 9
// anchor-linked sections. Per-route metadata (TOWN_METADATA), per-page nav
// (NAV_LINKS → routes), and the "nearby areas" cross-link data are retired
// — see build-notes.md Revision History for the full disposition.

export const BUSINESS_NAME = "EY Plumbing Solution";
export const BUSINESS_NAME_LONG = "EY Plumbing Solution";

// NAP (Name, Address, Phone) — must render identically everywhere per
// seo-strategy.md §5 / homepage.md CTA Definitions.
export const PHONE_DISPLAY = "055 703 2986";
export const PHONE_TEL = "tel:0557032986";
export const ADDRESS_LINE = "10th Avenue McCarthy, Greater Accra, Ghana";
export const ADDRESS = {
  streetAddress: "10th Avenue McCarthy",
  addressLocality: "Accra",
  addressRegion: "Greater Accra",
  addressCountry: "GH",
};

// Email is intentionally NOT exported/used anywhere in the UI or structured
// data. eugeneyeboah.422@gamil.com has an unresolved possible typo
// (gamil.com vs gmail.com) and is a documented pre-launch blocker per
// 00-brief.md §9, seo-strategy.md §5, and style-guide.md §8. Phone is the
// sole published contact method until this is resolved. See build-notes.md.

// Production domain is not yet registered (00-brief.md §7). Falls back to a
// placeholder so metadata/schema/sitemap generation never breaks locally;
// set NEXT_PUBLIC_SITE_URL in the real deployment environment.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.eyplumbingsolution.example";

// CTA copy varies by section urgency framing — see homepage.md "CTA
// Definitions (Site-Wide)". Every entry points to the same tel: action.
export const CTA = {
  standard: "Call 055 703 2986",
  emergency: "Call Now — We Answer 24/7",
  considered: "Call to Discuss Your Job",
  recurring: "Call to Talk About Ongoing Service",
} as const;

export type ServiceSlug =
  | "plumbing-repair"
  | "plumbing-installation"
  | "drain-cleaning-maintenance";

export type ServiceCalloutType = "emergency" | "pricing" | "recurring";

export interface ServiceDef {
  slug: ServiceSlug;
  /** Full anchor id per wireframes.md's Anchor Map, e.g. "services-plumbing-repair". */
  anchorId: string;
  name: string;
  shortDescription: string;
  /** Former page H1 — now this card's Accordion/ServiceDetail trigger H3, per the Heading Map. */
  h3: string;
  problem: string;
  included: string[];
  whoItsFor: string;
  calloutType: ServiceCalloutType;
  cta: string;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "plumbing-repair",
    anchorId: "services-plumbing-repair",
    name: "Plumbing Repair",
    shortDescription:
      "Leaks, burst pipes, running taps, blocked toilets. Fast response for urgent jobs.",
    h3: "Plumbing Repair Services in Accra",
    problem:
      "A dripping tap, a running toilet, or a pipe leak under the sink doesn't fix itself — and left alone, it usually gets worse and more expensive. EY Plumbing Solution provides plumbing repair across Greater Accra, from small leaks to larger pipe failures, so the problem gets solved properly the first time.",
    included: [
      "Leak detection and repair",
      "Pipe repair/replacement",
      "Tap and fixture repair",
      "Toilet repair",
      "General troubleshooting for plumbing that isn't working the way it should",
    ],
    whoItsFor:
      "Homeowners with an active leak, drip, or fixture problem, and property managers/landlords needing a repair handled at a tenant's unit.",
    calloutType: "emergency",
    cta: CTA.emergency,
  },
  {
    slug: "plumbing-installation",
    anchorId: "services-plumbing-installation",
    name: "Plumbing Installation",
    shortDescription: "New fixtures, water heaters, pipe replacement.",
    h3: "Plumbing Installation Services in Accra",
    problem:
      "Planning a new water heater, replacing old fixtures, or fitting out a new bathroom? Plumbing installation is a job worth getting right the first time — EY Plumbing Solution handles fixture, water heater, and pipe installation across Greater Accra, done properly and explained clearly before we start.",
    included: [
      "Water heater installation",
      "New fixture installation (sinks, taps, toilets, showers)",
      "New pipe runs and replacements",
      "Fittings for renovations or new builds",
    ],
    whoItsFor:
      "Homeowners planning an upgrade or replacement, and property managers preparing a unit for a new tenant.",
    calloutType: "pricing",
    cta: CTA.considered,
  },
  {
    slug: "drain-cleaning-maintenance",
    anchorId: "services-drain-cleaning-maintenance",
    name: "Drain Cleaning & Maintenance",
    shortDescription: "Blockages, routine inspections, ongoing upkeep.",
    h3: "Drain Cleaning & Plumbing Maintenance in Accra",
    problem:
      "A slow or blocked drain is usually a warning sign, not a one-off inconvenience — and regular plumbing maintenance catches small problems before they become expensive ones. EY Plumbing Solution offers drain cleaning and routine plumbing maintenance across Greater Accra, for single homes and multi-unit properties alike.",
    included: [
      "Drain unclogging and cleaning",
      "Routine plumbing inspections",
      "Preventive maintenance for older pipework",
      "Ongoing maintenance visits for landlords and property managers with multiple units",
    ],
    whoItsFor:
      "Homeowners with a recurring drainage issue, and — especially — property managers and landlords who want one plumber handling ongoing maintenance across several properties instead of a different contact every time something breaks.",
    calloutType: "recurring",
    cta: CTA.recurring,
  },
];

export function getService(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export interface TownDef {
  slug: string;
  name: string;
  intro: string;
  /** Whether this town has genuinely town-specific copy (only McCarthy Hill, per services.md) */
  hasDetailedCopy: boolean;
}

// Service-area town list is a research-based PROPOSAL from seo-strategy.md §5,
// not yet client-confirmed (00-brief.md Open Questions). Rendered with an
// explicit "proposed coverage area, pending confirmation" caption per
// wireframes.md §4 — never presented as final/confirmed coverage.
export const TOWNS: TownDef[] = [
  {
    slug: "mccarthy-hill",
    name: "McCarthy Hill",
    intro:
      "Based on 10th Avenue McCarthy, right in the area — repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs, with the advantage of being based locally.",
    hasDetailedCopy: true,
  },
  {
    slug: "weija",
    name: "Weija",
    intro: "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs.",
    hasDetailedCopy: false,
  },
  {
    slug: "mallam",
    name: "Mallam",
    intro: "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs.",
    hasDetailedCopy: false,
  },
  {
    slug: "gbawe",
    name: "Gbawe",
    intro: "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs.",
    hasDetailedCopy: false,
  },
  {
    slug: "dansoman",
    name: "Dansoman",
    intro: "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs.",
    hasDetailedCopy: false,
  },
  {
    slug: "odorkor",
    name: "Odorkor",
    intro: "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs.",
    hasDetailedCopy: false,
  },
  {
    slug: "awoshie",
    name: "Awoshie",
    intro: "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs.",
    hasDetailedCopy: false,
  },
  {
    slug: "kasoa",
    name: "Kasoa",
    intro: "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs.",
    hasDetailedCopy: false,
  },
];

export function getTown(slug: string): TownDef | undefined {
  return TOWNS.find((t) => t.slug === slug);
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

// Full content of 03-content/faq.md, verbatim, grouped by its own category
// headers. Now a first-class `#faq` section per wireframes.md §8 (the
// Revision 1 "folded into Services Hub" placement decision is superseded).
// The "Are you licensed and insured?" question is intentionally omitted per
// faq.md's own recommendation.
export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "emergency-response",
    title: "Emergency & Response",
    items: [
      {
        question: "Do you actually answer the phone for emergencies, day or night?",
        answer:
          "Yes — that's the whole point of how we've set this up. No call center, no answering machine. Call any time and we pick up.",
      },
      {
        question: "Can you come out the same day for an emergency?",
        answer:
          "Emergency call-outs are exactly what we're set up for — burst pipes, major leaks, and flooding get priority. Call and we'll talk through timing straight away.",
      },
      {
        question: "What counts as a plumbing emergency?",
        answer:
          "Burst or badly leaking pipes, flooding, sewage backup, a toilet or drain that won't stop overflowing, or no water supply at all. If it's actively getting worse right now, call us and skip the general repair queue — go straight to our emergency line.",
      },
    ],
  },
  {
    id: "working-with-us",
    title: "Working With Us — Ongoing & Multi-Property Service",
    items: [
      {
        question:
          "Can EY Plumbing Solution be our regular plumber for multiple rental units or properties?",
        answer:
          "Yes — this is exactly the kind of relationship we want to build. Instead of finding a different plumber every time something breaks across your properties, you can call the same number and get someone who already understands the work involved.",
      },
      {
        question: "How do I know EY Plumbing Solution is a dependable business and not a one-off contact?",
        answer:
          "We're based in Greater Accra and take repair, installation, and maintenance calls directly — you're not going through a middleman.",
      },
      {
        question: "Can you set up a regular maintenance schedule for a property or portfolio?",
        answer:
          "Ask us directly and we'll talk through what a regular maintenance visit schedule could look like for your property or portfolio.",
      },
    ],
  },
  {
    id: "services-scope",
    title: "Services & Scope",
    items: [
      {
        question: "Do you handle both repairs and installations, or just one?",
        answer:
          "Both. We do plumbing repair (leaks, burst pipes, blocked toilets), installation (water heaters, fixtures, new pipework), and drain cleaning & maintenance — one plumber for the whole job, not just a single fix.",
      },
      {
        question:
          "My problem isn't an emergency — is it still worth calling, or should I try to fix it myself?",
        answer:
          "If it's a persistent issue like dropping water pressure, a slow drain, or a fixture that's not working right, it's worth a call before it becomes a bigger (and more expensive) problem. We'll talk through what's going on and whether it's something worth having looked at properly.",
      },
      {
        question: "How much does a plumbing job cost?",
        answer:
          "Cost depends on the job — a small repair is very different from a new water heater installation.",
      },
    ],
  },
  {
    id: "coverage-trust",
    title: "Coverage & Trust",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "We're based in Greater Accra, working from 10th Avenue McCarthy, and serve homeowners and property managers across the wider area.",
      },
      // "Are you licensed and insured?" intentionally omitted — see faq.md
      // and wireframes.md §8: the fact is unconfirmed and must not ship
      // with a placeholder answer visible to visitors.
    ],
  },
];

// Value Props / Trust Signal badges — currently-confirmable claims only
// (homepage.md §3, about.md §4). A 5th badge ("Licensed & Insured" /
// "X Years Serving Accra") is reserved but NOT rendered until the client
// confirms those facts — do not invent it.
export const VALUE_PROPS = [
  {
    title: "You Reach Us Directly",
    body: "No call center, no long hold. Call and talk to someone who can actually help.",
  },
  {
    title: "Repair, Installation & Maintenance",
    body: "From a leaking pipe to a new water heater to routine drain care, one plumber for the whole job.",
  },
  {
    title: "Based in Greater Accra",
    body: "Working out of 10th Avenue McCarthy and serving homes and properties across the wider Accra area.",
  },
  {
    title: "Straightforward Conversations",
    body: "We'll tell you what the problem is and what it takes to fix it — no jargon, no run-around.",
  },
];

export const TRUST_SIGNALS = [
  "Based in Greater Accra",
  "We Answer the Phone Directly",
  "Repair, Installation & Maintenance Under One Business",
];

// Emergency section content — was the standalone /emergency-plumbing page,
// now Panel/EmergencyDetail beneath Band/Emergency inside #emergency
// (wireframes.md §3).
export const EMERGENCY_SIGNS = [
  "Burst or badly leaking pipes",
  "Flooding",
  "Sewage backup",
  "A toilet or drain that won't stop overflowing",
  "No water supply to the whole property",
];

// Primary section anchor nav — mirrors wireframes.md §0 Header/NavBar spec.
// Replaces the former per-route NAV_LINKS. "Home" has no entry here: the
// logo itself scrolls to #hero (see Header.tsx).
export interface SectionNavLink {
  id: string;
  label: string;
}

export const SECTION_NAV: SectionNavLink[] = [
  { id: "services", label: "Services" },
  { id: "service-areas", label: "Service Areas" },
  { id: "gallery", label: "Gallery" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Footer "Section Links" column — the same 8 anchors as the nav, plus Home.
// The former per-town-link "Service Areas" column is retired (wireframes.md
// §0 Footer note) — all 8 towns are visible together in #service-areas, so
// a single link covers it.
export const FOOTER_SECTION_LINKS: SectionNavLink[] = [
  { id: "hero", label: "Home" },
  ...SECTION_NAV,
];

export const GALLERY_PLACEHOLDER_COUNT = 8;
