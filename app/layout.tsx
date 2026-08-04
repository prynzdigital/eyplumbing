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

// No title template here: every page below sets its own complete <title>
// verbatim from 02-seo/metadata.md (several intentionally omit the business
// name or place it differently) — a template would silently double up the
// business name on top of that approved copy. `default` only applies to a
// route that defines no metadata of its own (none currently do).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BUSINESS_NAME} | Accra Plumber, 24/7 Emergency Calls`,
  description:
    "24/7 emergency plumber in Greater Accra, Ghana. Fast repairs, installations & maintenance from EY Plumbing Solution. Call now.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
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
