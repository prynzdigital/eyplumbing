import Container from "../ui/Container";
import Surface from "../ui/Surface";
import EmergencyBand from "./EmergencyBand";
import { CheckIcon } from "../ui/icons";
import { EMERGENCY_SIGNS, TOWNS } from "@/lib/constants";

// #emergency — Emergency (was standalone /emergency-plumbing page, plus
// Home's Emergency Band, wireframes.md §3). Band/Emergency is unchanged;
// Panel/EmergencyDetail (NEW) carries the former page's full content
// beneath it — nothing lost, just no longer a separate route.
export default function EmergencySection() {
  return (
    <section id="emergency" aria-labelledby="emergency-heading" className="bg-white">
      <EmergencyBand
        headingId="emergency-heading"
        headline="Pipe Burst? Drain Blocked? We Answer 24/7."
        body="Emergency plumbing across Greater Accra — call now, we pick up."
      />

      <div className="bg-slate-50 py-2xl lg:py-3xl">
        <Container>
          {/* Heading Map (wireframes.md): the former standalone page's H1
              ("Emergency Plumber in Accra — Call Now") is preserved
              verbatim here, not visually re-shown (Band/Emergency's H2
              above is the section's visible heading), so the exact phrase
              isn't lost, only reordered. */}
          <h3 className="sr-only">Emergency Plumber in Accra — Call Now</h3>
          <p className="mx-auto max-w-[720px] text-center text-body-lg lg:text-body-lg-lg text-ink-muted">
            Burst pipe? Major leak? Blocked toilet flooding your bathroom? EY Plumbing Solution is
            the emergency plumber Greater Accra calls day or night. Call now — we answer the phone
            ourselves, no call center, no waiting for a callback.
          </p>

          <div className="mt-xl grid grid-cols-1 gap-md lg:grid-cols-3">
            <Surface className="flex flex-col gap-sm p-md">
              <h3 className="text-h3 font-bold text-ink">What Counts as an Emergency</h3>
              <ul className="flex flex-col gap-xs">
                {EMERGENCY_SIGNS.map((sign) => (
                  <li key={sign} className="flex items-start gap-xs text-body text-ink">
                    <CheckIcon className="mt-1 shrink-0 text-secondary" width={18} height={18} />
                    {sign}
                  </li>
                ))}
              </ul>
              <p className="mt-2xs text-body text-ink-muted">
                Not sure it&apos;s an emergency?{" "}
                <a
                  href="#services-plumbing-repair"
                  className="font-medium text-secondary hover:text-secondary-hover hover:underline"
                >
                  See our full repair services
                </a>
                .
              </p>
            </Surface>

            <Surface className="flex flex-col gap-sm p-md">
              <h3 className="text-h3 font-bold text-ink">What Happens When You Call</h3>
              <p className="text-body text-ink-muted">
                We&apos;ll ask a few quick questions about what&apos;s happening so we know what
                to bring, then talk through timing for reaching you.
              </p>
            </Surface>

            <Surface className="flex flex-col gap-sm p-md">
              <h3 className="text-h3 font-bold text-ink">Service Area</h3>
              <p className="text-body text-ink-muted">
                Emergency call-outs across Greater Accra, including {TOWNS.map((t) => t.name).join(", ")}.
              </p>
              <p className="text-small lg:text-small-lg text-slate-600">
                Proposed coverage area — pending client confirmation.
              </p>
            </Surface>
          </div>

          <p className="mt-lg text-center text-body text-ink-muted">
            Have a question first?{" "}
            <a href="#faq" className="font-medium text-secondary hover:text-secondary-hover hover:underline">
              See our FAQs
            </a>
          </p>
        </Container>
      </div>
    </section>
  );
}
