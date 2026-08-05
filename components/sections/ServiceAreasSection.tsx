import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import { TownAreaCard } from "../ui/Card";
import { CTA, TOWNS } from "@/lib/constants";

// #service-areas — Service Areas (was Service Areas hub + all 8 town
// pages, wireframes.md §4). All 8 towns are visible together in one grid;
// the "proposed coverage area, pending confirmation" caption still renders
// on every card, unchanged status flag from the prior architecture.
export default function ServiceAreasSection() {
  return (
    <section id="service-areas" aria-labelledby="service-areas-heading" className="bg-white py-2xl lg:py-3xl">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <h2 id="service-areas-heading" className="text-h2 lg:text-h2-lg font-bold text-ink">
            Find Your Local Plumber in Greater Accra
          </h2>
          <p className="mt-md text-body-lg lg:text-body-lg-lg text-ink-muted">
            Looking for a plumber near you in Greater Accra? EY Plumbing Solution serves
            homeowners and property managers across the following areas. Find your town below, or
            just call — we cover the wider Accra area even if your specific neighborhood
            isn&apos;t listed yet.
          </p>
        </div>

        {/* Heading hierarchy fix (issue-log.md #002, regression of the same
            defect class fixed once already on the old 19-page site's
            /service-areas route — see build-notes.md Stage 5b Revision
            History). Section h2 was followed directly by TownAreaCard h4s
            with no intermediate h3, skipping a level. Visually-hidden h3
            restores a sequential h2->h3->h4 order, matching the pattern
            already used correctly in EmergencySection.tsx. */}
        <h3 className="sr-only">Service Areas</h3>

        <div className="mt-xl grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {TOWNS.map((town) => (
            <TownAreaCard
              key={town.slug}
              name={town.name}
              intro={town.intro}
              hasDetailedCopy={town.hasDetailedCopy}
            />
          ))}
        </div>

        <div className="mt-xl flex justify-center">
          <CallCTA label={CTA.standard} />
        </div>
      </Container>
    </section>
  );
}
