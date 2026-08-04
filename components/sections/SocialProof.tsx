import Container from "../ui/Container";
import { TestimonialEmptyState } from "../ui/Card";

// Social Proof — Home §6 (homepage.md). No real testimonials exist yet;
// renders the Card/Testimonial empty state, never invented quotes/ratings.
export default function SocialProof() {
  return (
    <section className="bg-surface py-2xl lg:py-3xl">
      <Container>
        <h2 className="mb-lg text-center text-h2 lg:text-h2-lg font-bold text-ink">
          What Our Customers Say
        </h2>
        <TestimonialEmptyState />
      </Container>
    </section>
  );
}
