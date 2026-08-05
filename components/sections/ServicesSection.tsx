"use client";

import { useEffect, useState } from "react";
import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import Surface from "../ui/Surface";
import { ServiceTeaser } from "../ui/Card";
import EmergencyBand from "./EmergencyBand";
import { CTA, SERVICES, ServiceDef } from "@/lib/constants";
import { CheckIcon, ClockIcon, PipeWrenchIcon, WrenchIcon } from "../ui/icons";

const ICONS = [WrenchIcon, PipeWrenchIcon, ClockIcon] as const;

// #services — Services Overview (was Services hub + its 3 sub-pages,
// wireframes.md §2). All 3 former service-page sections are preserved in
// full via Accordion/ServiceDetail — nothing trimmed. Multiple panels can
// be open simultaneously (same "no accordion fighting" policy as FAQ).
export default function ServicesSection() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  // Deep-link behavior: a visitor arriving via an old 301-redirected
  // /services/[slug] URL (now /#services-[slug]) lands with that panel
  // pre-expanded and scrolled into view, per style-guide.md §6.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const match = SERVICES.find((s) => s.anchorId === hash);
    if (match) {
      setOpen((prev) => ({ ...prev, [match.slug]: true }));
      document.getElementById(match.anchorId)?.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-slate-50 py-2xl lg:py-3xl">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <h2 id="services-heading" className="text-h2 lg:text-h2-lg font-bold text-ink">
            Plumbing Services in Greater Accra
          </h2>
          <p className="mt-md text-body-lg lg:text-body-lg-lg text-ink-muted">
            EY Plumbing Solution provides plumbing services across Greater Accra — repairs,
            installations, and drain cleaning &amp; maintenance for homeowners and property
            managers. Whether it&apos;s a burst pipe today or a new water heater next month, call
            us directly and we&apos;ll talk through the job.
          </p>
        </div>

        <div className="mt-xl grid grid-cols-1 gap-md lg:grid-cols-3 lg:items-start">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i % ICONS.length]!;
            const isOpen = Boolean(open[service.slug]);
            return (
              <div key={service.slug} className="flex flex-col gap-sm">
                <ServiceTeaser
                  icon={<Icon width={28} height={28} />}
                  title={service.name}
                  description={service.shortDescription}
                  expanded={isOpen}
                  panelId={`${service.anchorId}-panel`}
                  onToggle={() =>
                    setOpen((prev) => ({ ...prev, [service.slug]: !prev[service.slug] }))
                  }
                />
                <div id={service.anchorId} className="scroll-mt-24">
                  {isOpen && <ServiceDetailPanel service={service} />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-lg">
          <EmergencyBand
            headline="Is It an Emergency Right Now?"
            body="Pipe burst or major leak? Call us directly — we treat it as a priority."
            compact
          />
        </div>

        <div className="mt-xl flex justify-center">
          <CallCTA label={CTA.standard} />
        </div>
      </Container>
    </section>
  );
}

// Accordion/ServiceDetail (NEW) — the expanded-detail panel beneath each
// Card/Service, carrying the full content that previously lived on each
// service's own page: Problem paragraph, What's Included, Who It's For,
// the service-specific callout, and that service's own CTA variant.
function ServiceDetailPanel({ service }: { service: ServiceDef }) {
  return (
    <Surface id={`${service.anchorId}-panel`} nested className="flex flex-col gap-md p-md">
      <h3 className="sr-only">{service.h3}</h3>
      <p className="text-body text-ink-muted">{service.problem}</p>

      <div>
        <h4 className="text-h4 font-semibold text-ink">What&apos;s Included</h4>
        <ul className="mt-sm flex flex-col gap-xs">
          {service.included.map((item) => (
            <li key={item} className="flex items-start gap-xs text-body text-ink">
              <CheckIcon className="mt-1 shrink-0 text-secondary" width={18} height={18} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-h4 font-semibold text-ink">Who It&apos;s For</h4>
        <p className="mt-2xs text-body text-ink-muted">{service.whoItsFor}</p>
      </div>

      <ServiceCallout type={service.calloutType} />

      <CallCTA label={service.cta} />
    </Surface>
  );
}

function ServiceCallout({ type }: { type: ServiceDef["calloutType"] }) {
  if (type === "emergency") {
    return (
      <div className="rounded-md border-l-4 border-accent bg-sky-tint p-md">
        <h4 className="text-h4 font-semibold text-ink">Is This an Emergency?</h4>
        <p className="mt-2xs text-body text-ink-muted">
          If water is actively flooding or a pipe has burst, call us right away — we treat it as
          a priority every time.
        </p>
      </div>
    );
  }

  if (type === "pricing") {
    return (
      <div className="rounded-md border-l-4 border-secondary bg-sky-tint p-md">
        <h4 className="text-h4 font-semibold text-ink">Pricing Note</h4>
        <p className="mt-2xs text-body text-ink-muted">
          Cost depends on the job — a small fixture swap is very different from a full water
          heater installation. Call and we&apos;ll talk through what your job involves.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-md border-l-4 border-secondary bg-sky-tint p-md">
      <h4 className="text-h4 font-semibold text-ink">Recurring Service Note</h4>
      <p className="mt-2xs text-body text-ink-muted">
        Ask us directly and we&apos;ll talk through what a regular maintenance visit schedule
        could look like for your property or portfolio.
      </p>
    </div>
  );
}
