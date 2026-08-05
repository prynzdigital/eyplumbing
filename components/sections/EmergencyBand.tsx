import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import { ClockIcon } from "../ui/icons";
import { CTA } from "@/lib/constants";

// Band/Emergency — full-width accent section (design-system.md §6).
// `compact` variant used on the Services Hub emergency banner link.
export default function EmergencyBand({
  headline,
  body,
  href,
  compact = false,
  headingId,
}: {
  headline: string;
  body: string;
  href?: string;
  compact?: boolean;
  headingId?: string;
}) {
  return (
    <div className={`bg-accent ${compact ? "py-lg" : "py-2xl lg:py-3xl"}`}>
      <Container>
        <div className="flex flex-col items-start gap-md lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-sm">
            <ClockIcon className="mt-2xs shrink-0 text-white" aria-hidden="true" />
            <div>
              <h2
                id={headingId}
                className={`${compact ? "text-h3" : "text-h2 lg:text-h2-lg"} font-bold text-white`}
              >
                {headline}
              </h2>
              <p className="mt-2xs text-body text-white">{body}</p>
            </div>
          </div>
          {href ? (
            <a
              href={href}
              className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-white px-lg text-button font-bold text-accent transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Go to Emergency →
            </a>
          ) : (
            <CallCTA label={CTA.standard} inverted />
          )}
        </div>
      </Container>
    </div>
  );
}
