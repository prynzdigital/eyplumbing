import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CallCTA from "@/components/ui/Button";
import TrustBadge from "@/components/ui/Badge";
import { CTA, TRUST_SIGNALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About EY Plumbing Solution | Accra Plumber",
  description:
    "Meet EY Plumbing Solution, a straightforward, phone-first plumbing business serving Greater Accra homeowners & property managers.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    title: "We Answer the Phone",
    body: "Not a form, not a queue. A direct line to the business.",
  },
  {
    title: "We Explain Before We Start",
    body: "Plain language about what's wrong and what fixing it involves.",
  },
  {
    title: "We Cover Repair, Installation & Maintenance",
    body: "One plumber for the whole relationship, not just a one-off job.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto flex max-w-[720px] flex-col items-start gap-md">
            <h1 className="text-h1 lg:text-h1-lg font-extrabold text-ink">About EY Plumbing Solution</h1>
            <p className="text-body-lg lg:text-body-lg-lg text-ink-muted">
              EY Plumbing Solution is a plumbing services business based in Greater Accra, Ghana,
              offering straightforward repair, installation, and maintenance work.
            </p>
            <CallCTA label={CTA.standard} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">Our Story</h2>
            <p className="mt-sm text-body text-ink-muted">
              EY Plumbing Solution is based on 10th Avenue McCarthy in Greater Accra, offering
              plumbing repair, installation, and maintenance to homeowners and property managers
              across the area. We answer the phone directly — no call center standing between you
              and the person who can help.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">How We Work</h2>
            <p className="mt-sm text-body text-ink-muted">
              When you call, we talk through what&apos;s going on before anything else — what the
              problem is, roughly what&apos;s involved in fixing it, and when we can get to you. For
              emergencies, that conversation happens fast; for planned installation or maintenance
              work, we take the time to get the details right.
            </p>
            <div className="mt-lg grid grid-cols-1 gap-md lg:grid-cols-3">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="rounded-md border border-border bg-surface-alt p-md shadow-sm">
                  <h3 className="text-h4-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2xs text-body text-ink-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto flex max-w-[720px] flex-wrap justify-center gap-sm">
            {TRUST_SIGNALS.map((signal) => (
              <TrustBadge key={signal}>{signal}</TrustBadge>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">Who We Work With</h2>
            <p className="mt-sm text-body text-ink-muted">
              We work with homeowners dealing with a repair or planning an installation, and with
              property managers and landlords who want one dependable plumber across several units
              instead of a different contact every time — a plumbing relationship you can rely on,
              not a one-off callout.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-md text-center">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-white">Ready to Talk to Someone?</h2>
            <CallCTA label={CTA.standard} />
          </div>
        </Container>
      </section>
    </>
  );
}
