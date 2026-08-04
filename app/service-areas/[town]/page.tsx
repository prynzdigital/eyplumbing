import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { TownAreaCard } from "@/components/ui/Card";
import CallCTA from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";
import { CTA, TOWNS, TOWN_METADATA, getTown, nearbyTowns } from "@/lib/constants";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";

// Reusable Town Page Template — applies identically to all 8 town pages
// per services.md's Town Page Template / wireframes.md §8. Only McCarthy
// Hill has genuinely town-specific copy today (see constants.ts) — the
// other 7 use the approved generic template pattern until the client
// confirms town-specific detail, per services.md's own instruction not to
// fabricate near-duplicate "real" copy.
const WHAT_WE_DO = [
  "Repair",
  "Installation",
  "Drain cleaning & maintenance",
  "24/7 emergency call-outs",
];

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export function generateMetadata({ params }: { params: { town: string } }): Metadata {
  const meta = TOWN_METADATA[params.town];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/service-areas/${params.town}` },
  };
}

export default function TownPage({ params }: { params: { town: string } }) {
  const town = getTown(params.town);
  if (!town) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/service-areas" },
    { name: town.name },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              serviceType: "Plumbing Services",
              description: town.intro,
              url: `/service-areas/${town.slug}`,
              areaServedTown: town.name,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema(
              crumbs.map((c) => ({ name: c.name, url: c.href ?? `/service-areas/${town.slug}` }))
            )
          ),
        }}
      />
      <Breadcrumb items={crumbs} />

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h1 className="text-h1 lg:text-h1-lg font-extrabold text-ink">{town.h1}</h1>
            <p className="mt-md text-body-lg lg:text-body-lg-lg text-ink-muted">{town.intro}</p>
            {!town.hasDetailedCopy && (
              <p className="mt-2xs text-small lg:text-small-lg text-ink-muted">
                Proposed coverage area — pending client confirmation.
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">What We Do in {town.name}</h2>
            <p className="mt-sm text-body text-ink-muted">{town.whatWeDo}</p>
            <ul className="mt-md flex flex-col gap-xs">
              {WHAT_WE_DO.map((item) => (
                <li key={item} className="flex items-center gap-xs text-body text-ink">
                  <CheckIcon className="shrink-0 text-secondary" width={18} height={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <h2 className="mb-md text-h3 font-bold text-ink">Nearby Areas</h2>
          <div className="flex flex-col gap-xs sm:flex-row sm:flex-wrap">
            {nearbyTowns(town.slug).map((nearby) => (
              <TownAreaCard key={nearby.slug} href={`/service-areas/${nearby.slug}`} name={nearby.name} compact />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <div className="flex justify-center">
            <CallCTA label={CTA.standard} />
          </div>
        </Container>
      </section>
    </>
  );
}
