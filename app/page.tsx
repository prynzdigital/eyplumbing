import HeroSlider from "@/components/sections/HeroSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import EmergencySection from "@/components/sections/EmergencySection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

// Single page (`/`) — 9 anchor-linked sections in the client-specified
// order, per 04-design/wireframes.md Revision 2 (Stage 4c): Hero →
// Services → Emergency → Service Areas → Gallery → Testimonials → About →
// FAQ → Contact. Page-level <title>/description come from the root layout
// (02-seo/metadata.md Stage 2c: a single-URL site has exactly one
// <title>/<meta name="description">, not a per-page override).
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <EmergencySection />
      <ServiceAreasSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
