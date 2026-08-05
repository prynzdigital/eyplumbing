import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Single-URL sitemap — 02-seo/seo-strategy.md §7 (Stage 2c revision). Still
// worth keeping (trivial cost, explicit lastmod signal, some SEO tooling
// expects it) even though its former multi-URL discovery/prioritization
// role is gone now that the site is one page. See seo-strategy.md §7 for
// the full reasoning — Google Business Profile's service-area
// configuration, not this file, is what now carries per-town discovery.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
