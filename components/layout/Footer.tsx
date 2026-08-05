import {
  ADDRESS_LINE,
  BUSINESS_NAME,
  CTA,
  FOOTER_SECTION_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  TRUST_SIGNALS,
} from "@/lib/constants";
import Container from "../ui/Container";
import CallCTA from "../ui/Button";
import TrustBadge from "../ui/Badge";

// Footer (UPDATED — anchor links, not route links; design-system.md §6 /
// wireframes.md §0). Desktop: 3 columns — (1) NAP block, (2) Section
// Links (the same 9 anchors as the nav, "Home" included), (3) CTA +
// trust-signal strip. The former "Service Areas: all 8 town links" column
// is retired — all 8 towns are visible together in #service-areas, so a
// single link in Section Links already covers it.
export default function Footer() {
  return (
    <footer className="bg-primary pb-20 pt-3xl text-white lg:pb-3xl">
      <Container>
        <div className="grid grid-cols-1 gap-2xl lg:grid-cols-3 lg:gap-lg">
          <div className="flex flex-col gap-sm">
            <p className="text-h4-lg font-bold text-white">{BUSINESS_NAME}</p>
            <p className="text-body text-white/80">{ADDRESS_LINE}</p>
            <a href={PHONE_TEL} className="text-phone-lg font-bold text-white hover:underline">
              {PHONE_DISPLAY}
            </a>
          </div>

          <FooterLinkGroup title="Section Links" />

          <div className="flex flex-col gap-sm">
            <p className="text-h4 font-semibold text-white">Why Call Us</p>
            <CallCTA label={CTA.standard} />
            <div className="mt-xs flex flex-col items-start gap-xs">
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

function FooterLinkGroup({ title }: { title: string }) {
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
          {FOOTER_SECTION_LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-body text-white/80 hover:text-white hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      {/* Desktop: always expanded */}
      <div className="hidden flex-col gap-sm lg:flex">
        <p className="text-h4 font-semibold text-white">{title}</p>
        <ul className="flex flex-col gap-xs">
          {FOOTER_SECTION_LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-body text-white/80 hover:text-white hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
