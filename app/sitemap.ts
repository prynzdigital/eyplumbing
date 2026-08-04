import { MetadataRoute } from "next";
import { SERVICES, SITE_URL, TOWNS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/emergency-plumbing",
    "/services",
    "/service-areas",
    "/gallery",
    "/testimonials",
    "/about",
    "/contact",
  ];

  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}`);
  const townRoutes = TOWNS.map((t) => `/service-areas/${t.slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...townRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/emergency-plumbing" ? 0.9 : 0.7,
  }));
}
