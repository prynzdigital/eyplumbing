# public/

No static image assets are committed here yet. `.prynz/clients/ey-plumbing-solutions/assets/` was
empty at build time (no logo file, no job-site photography) — see `05-development/build-notes.md`
for the full list of pending client assets. The favicon is generated dynamically at
`app/icon.tsx` as an honest interim placeholder (navy square + "EY" monogram), not a real logo.

Once real assets are supplied:
- Place the logo (SVG/PNG, transparent background) here and wire it into `components/layout/Header.tsx`
  and `components/layout/Footer.tsx` in place of the text wordmark.
- Place job-site/team photography here and wire it into `components/ui/GalleryGrid.tsx` (pass an
  `images` array) and `components/sections/Hero.tsx`.
