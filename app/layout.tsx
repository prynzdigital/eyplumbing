import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyEmergencyBar from "@/components/layout/StickyEmergencyBar";
import { BUSINESS_NAME, SITE_URL } from "@/lib/constants";
import { jsonLd, organizationSchema, plumberSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Single site metadata — 02-seo/metadata.md §1 (Stage 2c revision). The
// site collapsed from 19 routes to 1 indexable URL, so there is exactly
// one <title>/<meta name="description"> now, not a per-page table. This
// title is reused verbatim from the former Home page (it already served
// both the primary "plumber accra" and secondary "emergency plumber accra"
// intents in one string).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BUSINESS_NAME} | Accra Plumber, 24/7 Emergency Calls`,
  description:
    "24/7 emergency plumber serving Greater Accra & surrounding towns. Repairs, installations & drain maintenance — call EY Plumbing Solution now.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        {/* Consolidated schema plan — 02-seo/seo-strategy.md §6 (Stage 2c):
            one Plumber entity (with hasOfferCatalog covering all 4
            services + areaServed covering all 8 towns) and one
            complementary Organization block. No per-page Service/Plumber
            duplication and no BreadcrumbList (retired — no URL hierarchy
            left to describe). FAQPage schema removed along with the #faq
            section (client request) — schema must match visible content. */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: jsonLd(plumberSchema()) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }}
        />
        <Header />
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyEmergencyBar />
      </body>
    </html>
  );
}
