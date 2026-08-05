/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 301 redirect map for the 18 former per-route URLs → the new single-page
  // anchors, per 02-seo/seo-strategy.md §4 (Stage 2c revision). The site
  // collapsed from 19 routes to 1 (`/`); every other former URL must
  // redirect, not 404, since it may already be bookmarked/shared/indexed.
  async redirects() {
    return [
      { source: "/emergency-plumbing", destination: "/#emergency", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      {
        source: "/services/plumbing-repair",
        destination: "/#services-plumbing-repair",
        permanent: true,
      },
      {
        source: "/services/plumbing-installation",
        destination: "/#services-plumbing-installation",
        permanent: true,
      },
      {
        source: "/services/drain-cleaning-maintenance",
        destination: "/#services-drain-cleaning-maintenance",
        permanent: true,
      },
      { source: "/service-areas", destination: "/#service-areas", permanent: true },
      // Collapses all 8 former /service-areas/[town] routes into one rule —
      // no per-town anchor exists, all 8 town cards are visible together on
      // arrival at #service-areas (seo-strategy.md §4b).
      { source: "/service-areas/:town", destination: "/#service-areas", permanent: true },
      { source: "/gallery", destination: "/#gallery", permanent: true },
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
