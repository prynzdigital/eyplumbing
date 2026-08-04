import type { Config } from "tailwindcss";

// Tailwind theme tokens mirror `04-design/design-system.md` token-for-token.
// Do not introduce ad hoc hex codes in components — extend this file instead.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B2E4F",
          pressed: "#071F37",
        },
        secondary: {
          DEFAULT: "#2C6E9E",
          hover: "#1F4E70",
        },
        accent: {
          DEFAULT: "#C4460A",
          hover: "#A23906",
          active: "#7A2B04",
        },
        "sky-tint": "#E8F2FA",
        surface: {
          DEFAULT: "#F7F9FB",
          alt: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#16232E",
          muted: "#51636F",
        },
        border: "#D7E1E8",
        error: "#C22B2B",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // [fontSize, { lineHeight, fontWeight }] — mobile-first base sizes.
        // Pair with `lg:text-*-lg` utilities below for the desktop override per design-system.md §3.
        h1: ["30px", { lineHeight: "1.2", fontWeight: "800" }],
        "h1-lg": ["44px", { lineHeight: "1.15", fontWeight: "800" }],
        h2: ["24px", { lineHeight: "1.25", fontWeight: "700" }],
        "h2-lg": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["20px", { lineHeight: "1.3", fontWeight: "700" }],
        "h3-lg": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        h4: ["17px", { lineHeight: "1.35", fontWeight: "600" }],
        "h4-lg": ["19px", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["17px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["13px", { lineHeight: "1.5", fontWeight: "400" }],
        "small-lg": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        button: ["16px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "0.2px" }],
        "button-lg": ["17px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "0.2px" }],
        phone: ["18px", { lineHeight: "1.1", fontWeight: "700" }],
        "phone-lg": ["20px", { lineHeight: "1.1", fontWeight: "700" }],
      },
      spacing: {
        "2xs": "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        full: "999px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(11,46,79,0.10)",
        md: "0 4px 12px rgba(11,46,79,0.15)",
        lg: "0 12px 32px rgba(11,46,79,0.22)",
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
