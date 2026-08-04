import Image from "next/image";
import { ImageIcon } from "./icons";

// Gallery/ImageGrid — placeholder-state tiles only (no real job-site
// photography exists yet, design-system.md §6 / style-guide.md §4).
// Placeholder tiles are intentionally NOT clickable/zoomable — the
// Lightbox behavior in the component inventory only activates for real
// images, which don't exist at launch. Swapping in real photos later is a
// data change (pass `images`), not a rebuild.
export interface GalleryImage {
  src: string;
  alt: string;
}

export default function GalleryGrid({
  images = [],
  placeholderCount = 8,
}: {
  images?: GalleryImage[];
  placeholderCount?: number;
}) {
  if (images.length > 0) {
    // Reserved for once real photography is supplied — intentionally not
    // exercised at launch (see build-notes.md Known Limitations).
    return (
      <div className="grid grid-cols-2 gap-sm sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative aspect-square overflow-hidden rounded-md border border-border bg-surface-alt shadow-sm"
          >
            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-sm sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: placeholderCount }).map((_, i) => (
        <div
          key={i}
          className="flex aspect-square flex-col items-center justify-center gap-xs rounded-md border border-border bg-sky-tint p-md text-center shadow-sm"
        >
          <ImageIcon className="text-secondary" width={28} height={28} aria-hidden="true" />
          <span aria-hidden="true" className="text-small text-ink-muted">
            Photo coming soon
          </span>
        </div>
      ))}
      <span className="sr-only" role="status">
        No photos have been added to the gallery yet.
      </span>
    </div>
  );
}
