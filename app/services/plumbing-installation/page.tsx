import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CallCTA from "@/components/ui/Button";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { CheckIcon } from "@/components/ui/icons";
import { getService } from "@/lib/constants";
import { jsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";

const service = getService("plumbing-installation")!;

export const metadata: Metadata = {
  title: "Plumbing Installation in Accra | EY Plumbing",
  description:
    "New water heaters, fixtures & pipe installation across Greater Accra. Quality work, straightforward pricing talk. Call EY Plumbing Solution.",
  alternates: { canonical: "/services/plumbing-installation" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Plumbing Installation" },
];

export default function PlumbingInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            serviceSchema({
              serviceType: "Plumbing Installation",
              description: service.problem,
              url: "/services/plumbing-installation",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema(
              crumbs.map((c) => ({ name: c.name, url: c.href ?? "/services/plumbing-installation" }))
            )
          ),
        }}
      />
      <Breadcrumb items={crumbs} />

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h1 className="text-h1 lg:text-h1-lg font-extrabold text-ink">{service.h1}</h1>
            <p className="mt-md text-body-lg lg:text-body-lg-lg text-ink-muted">{service.problem}</p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">What&apos;s Included</h2>
            <ul className="mt-md grid grid-cols-1 gap-sm lg:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-xs text-body text-ink">
                  <CheckIcon className="mt-1 shrink-0 text-secondary" width={18} height={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">Who It&apos;s For</h2>
            <p className="mt-sm text-body text-ink-muted">{service.whoItsFor}</p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <h2 className="text-h2 lg:text-h2-lg font-bold text-ink">See Completed Installation Jobs</h2>
          <div className="mt-md">
            <GalleryGrid placeholderCount={4} />
          </div>
          <div className="mt-md">
            <Link href="/gallery" className="text-body font-medium text-secondary hover:text-secondary-hover hover:underline">
              View Full Gallery →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px] rounded-md border border-border bg-surface p-md">
            <h2 className="text-h3 font-bold text-ink">Pricing</h2>
            <p className="mt-2xs text-body text-ink-muted">
              Cost depends on the specifics of the job — call us and we&apos;ll talk through what&apos;s
              involved before you commit to anything.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <div className="flex justify-center">
            <CallCTA label={service.cta} />
          </div>
        </Container>
      </section>
    </>
  );
}
