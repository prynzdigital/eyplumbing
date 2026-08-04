import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/Card";
import CallCTA from "@/components/ui/Button";
import EmergencyBand from "@/components/sections/EmergencyBand";
import FaqAccordion from "@/components/ui/Accordion";
import { CTA, FAQ_CATEGORIES, SERVICES } from "@/lib/constants";
import { ClockIcon, PipeWrenchIcon, WrenchIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Plumbing Services in Accra | EY Plumbing Solution",
  description:
    "Repair, installation & maintenance plumbing services across Greater Accra. Fast, reliable, straightforward — call EY Plumbing Solution today.",
  alternates: { canonical: "/services" },
};

const ICONS = [WrenchIcon, PipeWrenchIcon, ClockIcon] as const;

export default function ServicesHubPage() {
  return (
    <>
      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h1 className="text-h1 lg:text-h1-lg font-extrabold text-ink">
              Plumbing Services in Greater Accra
            </h1>
            <p className="mt-md text-body-lg lg:text-body-lg-lg text-ink-muted">
              EY Plumbing Solution provides plumbing services across Greater Accra — repairs,
              installations, and drain cleaning &amp; maintenance for homeowners and property
              managers. Whether it&apos;s a burst pipe today or a new water heater next month, call us
              directly and we&apos;ll talk through the job.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <h2 className="mb-lg text-h2 lg:text-h2-lg font-bold text-ink">Our Services</h2>
          <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = ICONS[i % ICONS.length]!;
              return (
                <ServiceCard
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  icon={<Icon width={28} height={28} />}
                  title={service.name}
                  description={service.shortDescription}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <EmergencyBand
        headline="Is It an Emergency Right Now?"
        body="Pipe burst or major leak? Skip straight to emergency service."
        href="/emergency-plumbing"
        compact
      />

      <section id="faq" className="scroll-mt-24 bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <h2 className="mb-lg text-center text-h2 lg:text-h2-lg font-bold text-ink">
            Frequently Asked Questions
          </h2>
          <nav aria-label="FAQ categories" className="mx-auto mb-lg flex max-w-[720px] flex-wrap justify-center gap-sm">
            {FAQ_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-secondary bg-sky-tint px-md py-xs text-small lg:text-small-lg font-medium text-secondary hover:bg-secondary hover:text-white"
              >
                {category.title}
              </a>
            ))}
          </nav>
          <FaqAccordion categories={FAQ_CATEGORIES} />
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
