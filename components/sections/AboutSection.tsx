import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import TrustBadge from "../ui/Badge";
import { CTA, TRUST_SIGNALS } from "@/lib/constants";

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

// #about — About (was /about, wireframes.md §7). Every section of about.md
// preserved in its authored order; content unchanged from the prior
// architecture, only the heading level changed (former H1 → this
// section's H2, per the Heading Map).
export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-slate-50 py-2xl lg:py-3xl">
      <Container>
        <div className="mx-auto flex max-w-[720px] flex-col items-start gap-md">
          <h2 id="about-heading" className="text-h2 lg:text-h2-lg font-bold text-ink">
            About EY Plumbing Solution
          </h2>
          <p className="text-body-lg lg:text-body-lg-lg text-ink-muted">
            EY Plumbing Solution is a plumbing services business based in Greater Accra, Ghana,
            offering straightforward repair, installation, and maintenance work.
          </p>
          <CallCTA label={CTA.standard} />
        </div>

        <div className="mx-auto mt-xl max-w-[720px]">
          <h3 className="text-h3 font-bold text-ink">Our Story</h3>
          <p className="mt-sm text-body text-ink-muted">
            EY Plumbing Solution is based on 10th Avenue McCarthy in Greater Accra, offering
            plumbing repair, installation, and maintenance to homeowners and property managers
            across the area. We answer the phone directly — no call center standing between you
            and the person who can help.
          </p>
        </div>

        <div className="mx-auto mt-xl max-w-[720px]">
          <h3 className="text-h3 font-bold text-ink">How We Work</h3>
          <p className="mt-sm text-body text-ink-muted">
            When you call, we talk through what&apos;s going on before anything else — what the
            problem is, roughly what&apos;s involved in fixing it, and when we can get to you. For
            emergencies, that conversation happens fast; for planned installation or maintenance
            work, we take the time to get the details right.
          </p>
          <div className="mt-lg grid grid-cols-1 gap-md lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-md border border-border bg-surface-alt p-md shadow-sm">
                <h4 className="text-h4-lg font-semibold text-ink">{p.title}</h4>
                <p className="mt-2xs text-body text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-xl flex max-w-[720px] flex-wrap justify-center gap-sm">
          {TRUST_SIGNALS.map((signal) => (
            <TrustBadge key={signal}>{signal}</TrustBadge>
          ))}
        </div>

        <div className="mx-auto mt-xl max-w-[720px]">
          <h3 className="text-h3 font-bold text-ink">Who We Work With</h3>
          <p className="mt-sm text-body text-ink-muted">
            We work with homeowners dealing with a repair or planning an installation, and with
            property managers and landlords who want one dependable plumber across several units
            instead of a different contact every time — a plumbing relationship you can rely on,
            not a one-off callout.
          </p>
        </div>

        <div className="mx-auto mt-2xl flex max-w-[640px] flex-col items-center gap-md text-center">
          <h3 className="text-h3 font-bold text-ink">Ready to Talk to Someone?</h3>
          <CallCTA label={CTA.standard} />
        </div>
      </Container>
    </section>
  );
}
