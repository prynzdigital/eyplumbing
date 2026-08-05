import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import { TestimonialEmptyState } from "../ui/Card";
import { CTA } from "@/lib/constants";

// #testimonials — Testimonials (was /testimonials, merged with Home's
// Social Proof block, wireframes.md §6 — both described the identical
// empty state, so nothing is duplicated by merging them). No real
// testimonials exist yet; no invented quotes, names, or star ratings.
export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-white py-3xl">
      <Container>
        <h2
          id="testimonials-heading"
          className="mb-lg text-center text-h2 lg:text-h2-lg font-bold text-ink"
        >
          What Our Customers Say
        </h2>
        <TestimonialEmptyState />

        <div className="mt-xl flex justify-center">
          <CallCTA label={CTA.standard} />
        </div>
      </Container>
    </section>
  );
}
