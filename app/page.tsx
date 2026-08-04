import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import EmergencyBand from "@/components/sections/EmergencyBand";
import ValueProps from "@/components/sections/ValueProps";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ServiceAreaTeaser from "@/components/sections/ServiceAreaTeaser";
import SocialProof from "@/components/sections/SocialProof";
import CTABand from "@/components/sections/CTABand";
import { CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "EY Plumbing Solution | Accra Plumber, 24/7 Emergency Calls",
  description:
    "24/7 emergency plumber in Greater Accra, Ghana. Fast repairs, installations & maintenance from EY Plumbing Solution. Call now.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero
        h1="Your Plumber in Accra, Ghana — Call Anytime"
        subhead="EY Plumbing Solution handles repairs, installations, and drain maintenance across Greater Accra — plus emergency call-outs, day or night. Call us directly, no call center."
        ctaLabel="Call 055 703 2986 Now"
      />
      <EmergencyBand
        headline="Pipe Burst? Drain Blocked? We Answer 24/7."
        body="Emergency plumbing across Greater Accra — call now, we pick up."
      />
      <ValueProps />
      <ServicesPreview />
      <ServiceAreaTeaser />
      <SocialProof />
      <CTABand
        headline="Need a Plumber in Accra Right Now?"
        subhead="Call us directly — we handle emergencies, repairs, and installations across Greater Accra."
        ctaLabel={CTA.standard}
      />
    </>
  );
}
