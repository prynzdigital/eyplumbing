import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Container from "@/components/ui/Container";
import { CTA, TOWNS } from "@/lib/constants";
import { jsonLd, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber in Accra | EY Plumbing Solution",
  description:
    "Burst pipe or blocked drain? EY Plumbing Solution answers 24/7 emergency calls across Greater Accra. Call now for fast response.",
  alternates: { canonical: "/emergency-plumbing" },
};

const EMERGENCY_SIGNS = [
  "Burst or badly leaking pipes",
  "Flooding",
  "Sewage backup",
  "A toilet or drain that won't stop overflowing",
  "No water supply to the whole property",
];

export default function EmergencyPlumbingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              serviceType: "Emergency Plumbing",
              description:
                "24/7 emergency plumbing call-outs across Greater Accra — burst pipes, major leaks, flooding, sewage backup.",
              url: "/emergency-plumbing",
            })
          ),
        }}
      />
      {/* CTA-first hero: H1, then Button/CallCTA, then intro copy — the
          phone action must never be buried behind persuasion copy on this
          page, per services.md's explicit instruction. */}
      <Hero
        h1="Emergency Plumber in Accra — Call Now"
        subhead="Burst pipe? Major leak? Blocked toilet flooding your bathroom? EY Plumbing Solution is the emergency plumber Greater Accra calls day or night. Call now — we answer the phone ourselves, no call center, no waiting for a callback."
        ctaLabel={CTA.emergency}
        ctaFirst
      />

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">What Counts as an Emergency</h2>
            <ul className="mt-md flex flex-col gap-xs">
              {EMERGENCY_SIGNS.map((sign) => (
                <li key={sign} className="flex items-start gap-xs text-body text-ink">
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {sign}
                </li>
              ))}
            </ul>
            <p className="mt-md text-body text-ink-muted">
              Not sure it&apos;s an emergency?{" "}
              <Link href="/services/plumbing-repair" className="font-medium text-secondary hover:text-secondary-hover hover:underline">
                See our full repair services
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">What Happens When You Call</h2>
            <p className="mt-sm text-body text-ink-muted">
              We&apos;ll ask a few quick questions about what&apos;s happening so we know what to bring,
              then talk through timing for reaching you.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-sky-tint py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">Service Area</h2>
            <p className="mt-sm text-body text-ink-muted">
              Emergency call-outs across Greater Accra, including {TOWNS.map((t) => t.name).join(", ")}.
            </p>
            <p className="mt-2xs text-small lg:text-small-lg text-ink-muted">
              Proposed coverage area — pending client confirmation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-lg">
        <Container>
          <p className="text-center text-body text-ink-muted">
            Have a question first?{" "}
            <Link href="/services#faq" className="font-medium text-secondary hover:text-secondary-hover hover:underline">
              See our FAQs
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
