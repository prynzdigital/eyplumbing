// Single source of truth for business facts, NAP data, nav structure, and
// content-driven data (services, towns, FAQ, testimonials/gallery state).
// Sourced verbatim from 00-brief.md, 02-seo/*, 03-content/* — do not hardcode
// duplicates of these values elsewhere in the app.

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

// CTA copy varies by page urgency framing — see homepage.md "CTA Definitions
// (Site-Wide)". Every entry points to the same tel: action.
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

export interface ServiceDef {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  h1: string;
  primaryKeyword: string;
  problem: string;
  included: string[];
  whoItsFor: string;
  cta: string;
  ctaContext: keyof typeof CTA;
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "plumbing-repair",
    name: "Plumbing Repair",
    shortDescription: "Leaks, burst pipes, running taps, blocked toilets. Fast response for urgent jobs.",
    h1: "Plumbing Repair Services in Accra",
    primaryKeyword: "plumbing repair accra",
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
    cta: CTA.emergency,
    ctaContext: "emergency",
  },
  {
    slug: "plumbing-installation",
    name: "Plumbing Installation",
    shortDescription: "New fixtures, water heaters, pipe replacement.",
    h1: "Plumbing Installation Services in Accra",
    primaryKeyword: "plumbing installation accra",
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
    cta: CTA.considered,
    ctaContext: "considered",
  },
  {
    slug: "drain-cleaning-maintenance",
    name: "Drain Cleaning & Maintenance",
    shortDescription: "Blockages, routine inspections, ongoing upkeep.",
    h1: "Drain Cleaning & Plumbing Maintenance in Accra",
    primaryKeyword: "drain cleaning accra",
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
    cta: CTA.recurring,
    ctaContext: "recurring",
  },
];

export function getService(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export interface TownDef {
  slug: string;
  name: string;
  h1: string;
  intro: string;
  whatWeDo: string;
  /** Whether this town has genuinely town-specific copy (only McCarthy Hill, per services.md) */
  hasDetailedCopy: boolean;
}

// Service-area town list is a research-based PROPOSAL from seo-strategy.md §5,
// not yet client-confirmed (00-brief.md Open Questions). Rendered with an
// explicit "proposed coverage area, pending confirmation" caption per
// wireframes.md §7 — never presented as final/confirmed coverage.
export const TOWNS: TownDef[] = [
  {
    slug: "mccarthy-hill",
    name: "McCarthy Hill",
    h1: "Plumber in McCarthy Hill, Accra",
    intro:
      "Need a plumber in McCarthy Hill? EY Plumbing Solution is based on 10th Avenue McCarthy, right in the area — we provide plumbing repair, installation, and emergency call-outs to homes and properties in McCarthy Hill and the surrounding neighborhoods. Call us directly, no call center.",
    whatWeDo:
      "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs, with the advantage of being based locally in the area.",
    hasDetailedCopy: true,
  },
  {
    slug: "weija",
    name: "Weija",
    h1: "Plumber in Weija, Accra",
    intro:
      "Need a plumber in Weija? EY Plumbing Solution provides plumbing repair, installation, and emergency call-outs to homes and properties in Weija and the surrounding area. Call us directly — no call center, no long wait for a callback.",
    whatWeDo:
      "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs — same services as everywhere else we work.",
    hasDetailedCopy: false,
  },
  {
    slug: "mallam",
    name: "Mallam",
    h1: "Plumber in Mallam, Accra",
    intro:
      "Need a plumber in Mallam? EY Plumbing Solution provides plumbing repair, installation, and emergency call-outs to homes and properties in Mallam and the surrounding area. Call us directly — no call center, no long wait for a callback.",
    whatWeDo:
      "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs — same services as everywhere else we work.",
    hasDetailedCopy: false,
  },
  {
    slug: "gbawe",
    name: "Gbawe",
    h1: "Plumber in Gbawe, Accra",
    intro:
      "Need a plumber in Gbawe? EY Plumbing Solution provides plumbing repair, installation, and emergency call-outs to homes and properties in Gbawe and the surrounding area. Call us directly — no call center, no long wait for a callback.",
    whatWeDo:
      "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs — same services as everywhere else we work.",
    hasDetailedCopy: false,
  },
  {
    slug: "dansoman",
    name: "Dansoman",
    h1: "Plumber in Dansoman, Accra",
    intro:
      "Need a plumber in Dansoman? EY Plumbing Solution provides plumbing repair, installation, and emergency call-outs to homes and properties in Dansoman and the surrounding area. Call us directly — no call center, no long wait for a callback.",
    whatWeDo:
      "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs — same services as everywhere else we work.",
    hasDetailedCopy: false,
  },
  {
    slug: "odorkor",
    name: "Odorkor",
    h1: "Plumber in Odorkor, Accra",
    intro:
      "Need a plumber in Odorkor? EY Plumbing Solution provides plumbing repair, installation, and emergency call-outs to homes and properties in Odorkor and the surrounding area. Call us directly — no call center, no long wait for a callback.",
    whatWeDo:
      "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs — same services as everywhere else we work.",
    hasDetailedCopy: false,
  },
  {
    slug: "awoshie",
    name: "Awoshie",
    h1: "Plumber in Awoshie, Accra",
    intro:
      "Need a plumber in Awoshie? EY Plumbing Solution provides plumbing repair, installation, and emergency call-outs to homes and properties in Awoshie and the surrounding area. Call us directly — no call center, no long wait for a callback.",
    whatWeDo:
      "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs — same services as everywhere else we work.",
    hasDetailedCopy: false,
  },
  {
    slug: "kasoa",
    name: "Kasoa",
    h1: "Plumber in Kasoa, Accra",
    intro:
      "Need a plumber in Kasoa? EY Plumbing Solution provides plumbing repair, installation, and emergency call-outs to homes and properties in Kasoa and the surrounding area. Call us directly — no call center, no long wait for a callback.",
    whatWeDo:
      "Repair, installation, drain cleaning & maintenance, and 24/7 emergency call-outs — same services as everywhere else we work.",
    hasDetailedCopy: false,
  },
];

export function getTown(slug: string): TownDef | undefined {
  return TOWNS.find((t) => t.slug === slug);
}

// Per-town <title>/description pairs, verbatim from 02-seo/metadata.md.
export const TOWN_METADATA: Record<string, { title: string; description: string }> = {
  "mccarthy-hill": {
    title: "McCarthy Hill Plumber | EY Plumbing Solution Accra",
    description:
      "Need a plumber in McCarthy Hill, Accra? EY Plumbing Solution offers fast, reliable repair, installation & emergency plumbing. Call now.",
  },
  weija: {
    title: "Weija Plumber | EY Plumbing Solution Accra",
    description:
      "Need a plumber in Weija, Accra? EY Plumbing Solution offers fast, reliable repair, installation & emergency plumbing. Call now.",
  },
  mallam: {
    title: "Mallam Plumber | EY Plumbing Solution Accra",
    description:
      "Need a plumber in Mallam, Accra? EY Plumbing Solution offers fast, reliable repair, installation & emergency plumbing. Call now.",
  },
  gbawe: {
    title: "Gbawe Plumber | EY Plumbing Solution Accra",
    description:
      "Need a plumber in Gbawe, Accra? EY Plumbing Solution offers fast, reliable repair, installation & emergency plumbing. Call now.",
  },
  dansoman: {
    title: "Dansoman Plumber | EY Plumbing Solution Accra",
    description:
      "Need a plumber in Dansoman, Accra? EY Plumbing Solution offers fast, reliable repair, installation & emergency plumbing. Call now.",
  },
  odorkor: {
    title: "Odorkor Plumber | EY Plumbing Solution Accra",
    description:
      "Need a plumber in Odorkor, Accra? EY Plumbing Solution offers fast, reliable repair, installation & emergency plumbing. Call now.",
  },
  awoshie: {
    title: "Awoshie Plumber | EY Plumbing Solution Accra",
    description:
      "Need a plumber in Awoshie, Accra? EY Plumbing Solution offers fast, reliable repair, installation & emergency plumbing. Call now.",
  },
  kasoa: {
    title: "Kasoa Plumber | EY Plumbing Solution Accra",
    description:
      "Need a plumber in Kasoa, Ghana? EY Plumbing Solution offers fast, reliable repair, installation & emergency plumbing. Call now.",
  },
};

export function nearbyTowns(currentSlug: string, count = 3): TownDef[] {
  const others = TOWNS.filter((t) => t.slug !== currentSlug);
  return others.slice(0, count);
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
// headers. Rendered as an Accordion/FAQ section on the Services Hub page
// per wireframes.md's FAQ placement decision (no standalone /faq route in
// metadata.md's confirmed sitemap). The "Are you licensed and insured?"
// question is intentionally omitted per faq.md's own recommendation.
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
      // and wireframes.md §3: the fact is unconfirmed and must not ship
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

// Primary nav structure — mirrors wireframes.md §0 Header/NavBar spec.
export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  },
  { label: "Emergency Plumbing", href: "/emergency-plumbing" },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: TOWNS.map((t) => ({ label: t.name, href: `/service-areas/${t.slug}` })),
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Footer "Site links" column — includes the FAQ anchor per the FAQ
// placement decision in wireframes.md (no standalone /faq route).
export const FOOTER_SITE_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  ...SERVICES.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  { label: "Emergency Plumbing", href: "/emergency-plumbing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/services#faq" },
];

export const GALLERY_PLACEHOLDER_COUNT = 8;
