import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { TestimonialEmptyState } from "@/components/ui/Card";
import CallCTA from "@/components/ui/Button";
import { CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Reviews | EY Plumbing Solution Accra",
  description:
    "Read what Greater Accra customers say about EY Plumbing Solution's plumbing repairs, installations & emergency call-outs. Call us today.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-surface-alt py-3xl">
        <Container>
          <h1 className="mb-lg text-center text-h1 lg:text-h1-lg font-extrabold text-ink">
            What Our Customers Say
          </h1>
          <TestimonialEmptyState />
        </Container>
      </section>

      <section className="bg-surface py-2xl lg:py-3xl">
        <Container>
          <div className="flex justify-center">
            <CallCTA label={CTA.standard} />
          </div>
        </Container>
      </section>
    </>
  );
}
