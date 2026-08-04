import Container from "../ui/Container";
import { VALUE_PROPS } from "@/lib/constants";

// Value Props — Home §3 (homepage.md). Mobile: 1-column stacked list.
// Desktop: 4 columns. A 5th badge (licensing/years-in-business) is
// reserved but not rendered until those facts are confirmed.
export default function ValueProps() {
  return (
    <section className="bg-surface py-2xl lg:py-3xl">
      <Container>
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((prop) => (
            <div
              key={prop.title}
              className="flex flex-col gap-2xs rounded-md border border-border bg-surface-alt p-md shadow-sm"
            >
              <h3 className="text-h4-lg font-semibold text-ink">{prop.title}</h3>
              <p className="text-body text-ink-muted">{prop.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
