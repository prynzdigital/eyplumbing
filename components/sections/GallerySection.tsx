import Container from "../ui/Container";
import GalleryGrid, { GalleryImage } from "../ui/GalleryGrid";
import CallCTA from "../ui/Button";
import { CTA } from "@/lib/constants";

// Client-supplied job photos (public/gallery/), replacing the placeholder
// "Photo coming soon" tiles.
const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/gallery/job-01.jpg", alt: "Completed bathroom shower and vanity installation" },
  { src: "/gallery/job-02.jpg", alt: "Modern kitchen faucet installation" },
  { src: "/gallery/job-03.jpg", alt: "Plumbing repair work underneath a sink" },
  { src: "/gallery/job-04.jpg", alt: "Faucet fixture with running water after repair" },
  { src: "/gallery/job-05.png", alt: "Plumbing technician installing outdoor drainage pipework" },
];

// #gallery — Gallery (was /gallery, wireframes.md §5). Gallery tiles stay
// solid (non-frost) per design-system.md §6 — the client's frost request
// named service/town/testimonial cards and FAQ rows only.
export default function GallerySection() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-slate-50 py-2xl lg:py-3xl">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <h2 id="gallery-heading" className="text-h2 lg:text-h2-lg font-bold text-ink">
            Our Plumbing Work — Completed Jobs in Accra
          </h2>
          <p className="mt-md text-body-lg lg:text-body-lg-lg text-ink-muted">
            A look at plumbing repair and installation work completed by EY Plumbing Solution
            across Greater Accra.
          </p>
        </div>

        <div className="mt-xl">
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>

        <div className="mt-xl flex justify-center">
          <CallCTA label={CTA.recurring} />
        </div>
      </Container>
    </section>
  );
}
