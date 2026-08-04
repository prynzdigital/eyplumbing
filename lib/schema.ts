// Structured-data (schema.org JSON-LD) builders, per 02-seo/seo-strategy.md §6.
// Only currently-confirmable facts are encoded — no invented ratings, review
// counts, licensing claims, or logo image (no real logo file exists yet).

import { ADDRESS, ADDRESS_LINE, BUSINESS_NAME, PHONE_TEL, SITE_URL, TOWNS } from "./constants";

export function plumberSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
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
  };
}

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

export function serviceSchema(opts: {
  serviceType: string;
  description: string;
  url: string;
  areaServedTown?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: {
      "@type": "Plumber",
      name: BUSINESS_NAME,
      telephone: PHONE_TEL.replace("tel:", ""),
      address: ADDRESS_LINE,
    },
    areaServed: opts.areaServedTown
      ? { "@type": "City", name: `${opts.areaServedTown}, Greater Accra` }
      : { "@type": "AdministrativeArea", name: "Greater Accra, Ghana" },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
