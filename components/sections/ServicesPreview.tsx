import Link from "next/link";
import Container from "../ui/Container";
import { ServiceCard } from "../ui/Card";
import { SERVICES } from "@/lib/constants";
import { ClockIcon, PipeWrenchIcon, WrenchIcon } from "../ui/icons";

const ICONS = [WrenchIcon, PipeWrenchIcon, ClockIcon] as const;

// Services Preview — Home §4 (homepage.md). 4 cards: the 3 services plus
// Emergency Plumbing, matching wireframes.md §1.4 exactly.
export default function ServicesPreview() {
  return (
    <section className="bg-surface-alt py-2xl lg:py-3xl">
      <Container>
        <h2 className="mb-lg text-h2 lg:text-h2-lg font-bold text-ink">What We Do</h2>
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            // Bounded by `i % ICONS.length` — always defined; non-null
            // assertion needed because noUncheckedIndexedAccess otherwise
            // widens this to `... | undefined`.
            const Icon = ICONS[i % ICONS.length]!;
            return (
              <ServiceCard
                key={service.slug}
                href={`/services/${service.slug}`}
                icon={<Icon width={28} height={28} />}
                title={service.name}
                description={service.shortDescription}
              />
            );
          })}
          <ServiceCard
            href="/emergency-plumbing"
            icon={<ClockIcon width={28} height={28} />}
            title="Emergency Plumbing"
            description="24/7 call-outs for burst pipes, major leaks, and flooding across Greater Accra."
          />
        </div>
        <div className="mt-lg">
          <Link href="/services" className="text-body font-medium text-secondary hover:text-secondary-hover hover:underline">
            See All Services →
          </Link>
        </div>
      </Container>
    </section>
  );
}
