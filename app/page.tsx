import HeroSlider from "@/components/sections/HeroSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

// Single page (`/`) — anchor-linked sections in the client-specified
// order, per 04-design/wireframes.md Revision 2 (Stage 4c) minus Emergency,
// Testimonials, and FAQ (removed per client request to simplify the
// navbar): Hero → Services → Service Areas → Gallery → About → Contact.
// Page-level <title>/description come from the root layout
// (02-seo/metadata.md Stage 2c: a single-URL site has exactly one
// <title>/<meta name="description">, not a per-page override).
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <ServiceAreasSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
