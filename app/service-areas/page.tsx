import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { TownAreaCard } from "@/components/ui/Card";
import CallCTA from "@/components/ui/Button";
import { CTA, TOWNS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumber Service Areas | Greater Accra | EY Plumbing",
  description:
    "EY Plumbing Solution serves homeowners & property managers across Greater Accra. Find your area & call for fast, reliable plumbing help.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasHubPage() {
  return (
    <>
      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h1 className="text-h1 lg:text-h1-lg font-extrabold text-ink">
              Find Your Local Plumber in Greater Accra
            </h1>
            <p className="mt-md text-body-lg lg:text-body-lg-lg text-ink-muted">
              Looking for a plumber near you in Greater Accra? EY Plumbing Solution serves
              homeowners and property managers across the following areas. Find your town below, or
              just call — we cover the wider Accra area even if your specific neighborhood
              isn&apos;t listed yet.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <h2 className="mb-md text-h2 lg:text-h2-lg font-bold text-ink">Where We Work</h2>
          <p className="mb-md text-small lg:text-small-lg text-ink-muted">
            Proposed coverage area — pending client confirmation.
          </p>
          <h3 className="sr-only">Service Areas</h3>
          <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
            {TOWNS.map((town) => (
              <TownAreaCard key={town.slug} href={`/service-areas/${town.slug}`} name={town.name} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="flex justify-center">
            <CallCTA label={CTA.standard} />
          </div>
        </Container>
      </section>
    </>
  );
}
