import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/ui/GalleryGrid";
import CallCTA from "@/components/ui/Button";
import { CTA, GALLERY_PLACEHOLDER_COUNT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Project Gallery | EY Plumbing Solution",
  description:
    "See completed plumbing repairs & installations across Greater Accra. Real work from EY Plumbing Solution — call to discuss your job.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <h1 className="text-h1 lg:text-h1-lg font-extrabold text-ink">
              Our Plumbing Work — Completed Jobs in Accra
            </h1>
            <p className="mt-md text-body-lg lg:text-body-lg-lg text-ink-muted">
              A look at plumbing repair and installation work completed by EY Plumbing Solution
              across Greater Accra.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <GalleryGrid placeholderCount={GALLERY_PLACEHOLDER_COUNT} />
        </Container>
      </section>

      <section className="bg-surface-alt py-2xl lg:py-3xl">
        <Container>
          <div className="flex justify-center">
            <CallCTA label={CTA.recurring} />
          </div>
        </Container>
      </section>
    </>
  );
}
