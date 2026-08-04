import { ImageResponse } from "next/og";

// Generated interim favicon (navy square + "EY" monogram) — NOT the real
// brand logo. No logo file exists in assets/ (00-brief.md §5); this is an
// honest placeholder so the site doesn't ship a missing/broken favicon.
// Replace with the real logo-derived icon once `[NEEDS CLIENT INPUT: logo
// file]` is resolved — see build-notes.md Known Limitations.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B2E4F",
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: 800,
          borderRadius: 6,
        }}
      >
        EY
      </div>
    ),
    { ...size }
  );
}
