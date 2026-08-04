import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CallCTA from "@/components/ui/Button";
import { MapPinIcon } from "@/components/ui/icons";
import { ADDRESS_LINE, CTA, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact EY Plumbing Solution | Call Now",
  description:
    "Call EY Plumbing Solution now for plumbing repairs, installation or a 24/7 emergency call-out in Greater Accra.",
  alternates: { canonical: "/contact" },
};

// Email is intentionally not rendered — eugeneyeboah.422@gamil.com has an
// unresolved possible domain typo (gamil.com vs gmail.com) and is a
// documented pre-launch blocker. Phone is the sole published contact
// method until this is resolved. See build-notes.md and style-guide.md §8.
export default function ContactPage() {
  return (
    <section className="bg-surface-alt py-3xl">
      <Container>
        <div className="mx-auto flex max-w-[480px] flex-col items-center gap-lg text-center">
          <div>
            <h1 className="text-h1 lg:text-h1-lg font-extrabold text-ink">Contact EY Plumbing Solution</h1>
            <p className="mt-sm text-body-lg lg:text-body-lg-lg text-ink-muted">
              The fastest way to reach us is by phone — we answer directly.
            </p>
          </div>

          <div className="w-full rounded-md border border-border bg-surface p-lg shadow-sm">
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
    </section>
  );
}
