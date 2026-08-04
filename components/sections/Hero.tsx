import { ReactNode } from "react";
import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import { DropletIcon, WrenchIcon } from "../ui/icons";

// Hero section — Home §1 (homepage.md). No real job-site/team photography
// exists yet (style-guide.md §4), so the hero uses the specified fallback:
// a primary/sky-tint gradient with the wordmark + wrench/droplet motif
// rather than a mismatched stock photo.
export default function Hero({
  h1,
  subhead,
  ctaLabel,
  ctaFirst = false,
  children,
}: {
  h1: string;
  subhead?: string;
  ctaLabel: string;
  /** Renders CTA above the subhead — used on the Emergency Plumbing page per its CTA-first requirement. */
  ctaFirst?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary-hover py-3xl lg:py-4xl">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10">
        <WrenchIcon className="absolute -right-8 -top-8 h-48 w-48 text-white" />
        <DropletIcon className="absolute bottom-0 left-0 h-40 w-40 text-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto flex max-w-[720px] flex-col items-start gap-md text-left">
          <h1 className="text-h1 lg:text-h1-lg font-extrabold text-white">{h1}</h1>
          {ctaFirst && <CallCTA label={ctaLabel} />}
          {subhead && <p className="text-body-lg lg:text-body-lg-lg text-white/90">{subhead}</p>}
          {!ctaFirst && <CallCTA label={ctaLabel} />}
          {children}
        </div>
      </Container>
    </section>
  );
}
