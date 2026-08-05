import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import { MapPinIcon } from "../ui/icons";
import { ADDRESS_LINE, CTA, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

// #contact — Contact (was /contact) + Site-Closing CTA (was Home's Primary
// CTA Band), wireframes.md §9 — the natural final section before the
// footer. Email is intentionally not rendered — eugeneyeboah.422@gamil.com
// has an unresolved possible domain typo, a documented pre-launch blocker.
// Phone is the sole published contact method. See build-notes.md.
export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white">
      <div className="py-3xl">
        <Container>
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-lg text-center">
            <div>
              <h2 id="contact-heading" className="text-h2 lg:text-h2-lg font-bold text-ink">
                Contact EY Plumbing Solution
              </h2>
              <p className="mt-sm text-body-lg lg:text-body-lg-lg text-ink-muted">
                The fastest way to reach us is by phone — we answer directly.
              </p>
            </div>

            <div className="w-full rounded-md border border-border bg-surface-alt p-lg shadow-sm">
              <a
                href={PHONE_TEL}
                className="block text-center text-[28px] font-bold leading-tight text-primary hover:text-secondary-hover"
              >
                {PHONE_DISPLAY}
              </a>
              <div className="mt-md flex items-center justify-center gap-xs text-body text-ink-muted">
                <MapPinIcon className="shrink-0 text-secondary" width={20} height={20} aria-hidden="true" />
                <span>{ADDRESS_LINE}</span>
              </div>
            </div>

            <CallCTA label={CTA.standard} fullWidth />
          </div>
        </Container>
      </div>

      {/* Site-Closing CTA — was Home §7 Primary CTA Band. slate-100 backing
          differentiates it from the Contact card above without introducing
          a new color, per wireframes.md §9. */}
      <div className="bg-slate-100 py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto flex max-w-[640px] flex-col items-center gap-md text-center">
            <h3 className="text-h2 lg:text-h2-lg font-bold text-ink">
              Need a Plumber in Accra Right Now?
            </h3>
            <p className="text-body-lg lg:text-body-lg-lg text-ink-muted">
              Call us directly — we handle emergencies, repairs, and installations across Greater
              Accra.
            </p>
            <CallCTA label={CTA.standard} />
          </div>
        </Container>
      </div>
    </section>
  );
}
