import Link from "next/link";
import Container from "./Container";

export interface Crumb {
  name: string;
  href?: string;
}

// Breadcrumb — wayfinding on nested /services/* and /service-areas/* URLs
// (design-system.md §6). Horizontally scrollable on mobile rather than
// wrapping, per wireframes.md §0.
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface">
      <Container>
        <ol className="flex items-center gap-xs overflow-x-auto whitespace-nowrap py-sm text-small lg:text-small-lg text-ink-muted">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.name} className="flex items-center gap-xs">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast || !item.href ? (
                  <span aria-current="page" className="text-ink">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-secondary hover:text-secondary-hover hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
