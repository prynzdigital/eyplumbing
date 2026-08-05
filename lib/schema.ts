// Structured-data (schema.org JSON-LD) builders, per 02-seo/seo-strategy.md
// §6 (Stage 2c revision — consolidated single-URL schema plan). Only
// currently-confirmable facts are encoded — no invented ratings, review
// counts, licensing claims, or logo image (no real logo file exists yet).
// `BreadcrumbList` is retired (no URL hierarchy left to describe, mirrors
// the Breadcrumb UI component's retirement).

import {
  ADDRESS,
  BUSINESS_NAME,
  EMERGENCY_SIGNS,
  FAQ_CATEGORIES,
  PHONE_TEL,
  SERVICES,
  SITE_URL,
  TOWNS,
} from "./constants";

const BUSINESS_ID = `${SITE_URL}/#business`;

// Main business entity — `Plumber` (subtype of HomeAndConstructionBusiness →
// LocalBusiness), once, with a `hasOfferCatalog` covering all 4 services
// (the 3 SERVICES entries + Emergency) and one `areaServed` array covering
// all 8 towns — replaces the former 19-page architecture's per-page
// `Plumber`/`Service`/`areaServed` duplication.
export function plumberSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE_TEL.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    areaServed: TOWNS.map((t) => ({
      "@type": "City",
      name: `${t.name}, Greater Accra`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: [
        ...SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            description: service.problem,
            url: `${SITE_URL}/#${service.anchorId}`,
            provider: { "@id": BUSINESS_ID },
            areaServed: { "@type": "AdministrativeArea", name: "Greater Accra, Ghana" },
          },
        })),
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Plumbing",
            serviceType: "Emergency Plumbing",
            description: `24/7 emergency plumbing call-outs across Greater Accra — ${EMERGENCY_SIGNS.join(
              ", "
            ).toLowerCase()}.`,
            url: `${SITE_URL}/#emergency`,
            provider: { "@id": BUSINESS_ID },
            areaServed: { "@type": "AdministrativeArea", name: "Greater Accra, Ghana" },
          },
        },
      ],
    },
  };
}

// Brand/logo — complementary to the Plumber entity (unchanged principle
// from Stage 2: no logo image URL since no real logo file exists yet).
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE_TEL.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
  };
}

// FAQPage — genuinely new schema opportunity that did not exist in the
// Stage 2 plan (seo-strategy.md §6). Maps 1:1 onto faq.md's real Q&A
// content; the licensing question stays omitted, matching the visible
// #faq section exactly (no schema-only content that isn't also on-page).
export function faqSchema() {
  const allQuestions = FAQ_CATEGORIES.flatMap((category) => category.items);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
