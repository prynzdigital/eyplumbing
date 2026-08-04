import Link from "next/link";
import {
  ADDRESS_LINE,
  BUSINESS_NAME,
  CTA,
  FOOTER_SITE_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  TOWNS,
  TRUST_SIGNALS,
} from "@/lib/constants";
import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import TrustBadge from "../ui/Badge";

// Footer — NAP block + full site/service-area nav + repeated CTA
// (design-system.md §6 / wireframes.md §0). Desktop: 4 columns.
// Mobile: NAP + CTA always visible; Site Links / Service Areas collapse
// into native <details> accordions to keep the footer scannable.
export default function Footer() {
  return (
    <footer className="bg-primary pb-20 pt-3xl text-white lg:pb-3xl">
      <Container>
        <div className="grid grid-cols-1 gap-2xl lg:grid-cols-4 lg:gap-lg">
          <div className="flex flex-col gap-sm">
            <p className="text-h4-lg font-bold text-white">{BUSINESS_NAME}</p>
            <p className="text-body text-white/80">{ADDRESS_LINE}</p>
            <a href={PHONE_TEL} className="text-phone-lg font-bold text-white hover:underline">
              {PHONE_DISPLAY}
            </a>
            <div className="mt-xs">
              <CallCTA label={CTA.standard} />
            </div>
          </div>

          <FooterLinkGroup title="Site Links" links={FOOTER_SITE_LINKS} />

          <FooterLinkGroup
            title="Service Areas"
            links={[
              { label: "All Service Areas", href: "/service-areas" },
              ...TOWNS.map((t) => ({ label: t.name, href: `/service-areas/${t.slug}` })),
            ]}
          />

          <div className="flex flex-col gap-sm">
            <p className="text-h4 font-semibold text-white">Why Call Us</p>
            <div className="flex flex-col items-start gap-xs">
              {TRUST_SIGNALS.map((signal) => (
                <TrustBadge key={signal}>{signal}</TrustBadge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2xl border-t border-white/10 pt-md text-small text-white/70">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <>
      {/* Mobile: collapsible */}
      <details className="group border-b border-white/10 py-xs lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between py-sm text-h4 font-semibold text-white">
          {title}
          <span aria-hidden="true" className="transition-transform group-open:rotate-180">
            ▾
          </span>
        </summary>
        <ul className="flex flex-col gap-xs pb-sm pl-2xs">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-body text-white/80 hover:text-white hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      {/* Desktop: always expanded */}
      <div className="hidden flex-col gap-sm lg:flex">
        <p className="text-h4 font-semibold text-white">{title}</p>
        <ul className="flex flex-col gap-xs">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-body text-white/80 hover:text-white hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
