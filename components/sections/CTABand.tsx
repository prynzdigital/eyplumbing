import Container from "../ui/Container";
import CallCTA from "../ui/Button";

// Primary CTA Band — final section before footer on most pages
// (homepage.md §7 and equivalents on About/Services/etc.).
export default function CTABand({
  headline,
  subhead,
  ctaLabel,
}: {
  headline: string;
  subhead?: string;
  ctaLabel: string;
}) {
  return (
    <section className="bg-primary py-2xl lg:py-3xl">
      <Container>
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-md text-center">
          <h2 className="text-h2 lg:text-h2-lg font-bold text-white">{headline}</h2>
          {subhead && <p className="text-body-lg lg:text-body-lg-lg text-white/90">{subhead}</p>}
          <CallCTA label={ctaLabel} />
        </div>
      </Container>
    </section>
  );
}
