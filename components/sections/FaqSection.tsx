import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import FaqAccordion from "../ui/Accordion";
import { CTA, FAQ_CATEGORIES } from "@/lib/constants";

// #faq — FAQ (NEW as a first-class section, wireframes.md §8; previously
// folded into the Services Hub as a workaround because the 19-page
// sitemap had no standalone /faq URL — that constraint no longer exists).
// All of faq.md rendered verbatim; licensing question still omitted.
export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-2xl lg:py-3xl">
      <Container>
        <h2 id="faq-heading" className="text-center text-h2 lg:text-h2-lg font-bold text-ink">
          Frequently Asked Questions — Accra Plumbing
        </h2>

        <nav aria-label="FAQ categories" className="mx-auto mb-xl mt-lg flex max-w-[720px] flex-wrap justify-center gap-sm">
          {FAQ_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-secondary bg-sky-tint px-md py-xs text-small lg:text-small-lg font-medium text-secondary hover:bg-secondary hover:text-white"
            >
              {category.title}
            </a>
          ))}
        </nav>

        <FaqAccordion categories={FAQ_CATEGORIES} />

        <div className="mt-xl flex justify-center">
          <CallCTA label="Still Have a Question? Call 055 703 2986" />
        </div>
      </Container>
    </section>
  );
}
