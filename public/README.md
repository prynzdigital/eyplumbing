# public/

Client-supplied assets, wired in.

- `logo.svg` / `logo.png` — brand mark. Used in `components/layout/Header.tsx` (shown only in the
  solid/frosted scrolled navbar state — no white/mono variant exists yet, so the transparent
  over-hero state still uses the text wordmark) and as `app/icon.png` (favicon). `Footer.tsx` also
  still uses the text wordmark (navy background, same reason).
- `hero/` — 3 photos used by `components/sections/HeroSlider.tsx`'s slide rotation.
- `gallery/` — 5 job photos used by `components/sections/GallerySection.tsx` via `GalleryGrid`'s
  `images` prop.

If a real white/light logo variant is supplied later, the Header's transparent state and the
Footer can both switch from the text wordmark to the logo image — see the inline comment in
`Header.tsx` above the logo conditional.
