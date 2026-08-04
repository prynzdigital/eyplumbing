import Link from "next/link";
import Container from "../ui/Container";
import { TOWNS } from "@/lib/constants";

// Service Area Teaser — Home §5 (homepage.md). Town list is an
// unconfirmed proposal (seo-strategy.md §5) — rendered with an explicit
// "proposed, pending confirmation" caption rather than presented as final.
export default function ServiceAreaTeaser() {
  return (
    <section className="bg-sky-tint py-2xl lg:py-3xl">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">
            Serving Homes &amp; Properties Across Greater Accra
          </h2>
          <p className="mt-sm text-body text-ink-muted">
            We work across {TOWNS.map((t) => t.name).join(", ")}.
          </p>
          <p className="mt-2xs text-small lg:text-small-lg text-ink-muted">
            Proposed coverage area — pending client confirmation.
          </p>
          <Link
            href="/service-areas"
            className="mt-md inline-block text-body font-medium text-secondary hover:text-secondary-hover hover:underline"
          >
            Check Your Area →
          </Link>
        </div>
      </Container>
    </section>
  );
}
