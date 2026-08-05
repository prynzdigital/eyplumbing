import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// Surface/Frost — design-system.md §2b. The shared visual primitive
// underlying every frosted card/panel/row on the site. Not used directly by
// content — always composed inside Card/Service, Card/TownArea,
// Card/Testimonial, Accordion/FAQ, Accordion/ServiceDetail.
//
// Variant `light`: frost-light-bg + frost-light-border + shadow-frost,
// radius-md. Text inside defaults to ink/ink-muted. Sits only on a solid
// slate-50/slate-100/white section background — never on the hero media or
// another translucent surface (style-guide.md §3).
//
// Variant `media`: frost-media-bg scrim (not a card shape) + frost-media-
// border + shadow-frost on child controls only. Text/icons default white.
// Used only by Hero/Slider's own scrim/controls (see HeroSlider.tsx).
type SurfaceVariant = "light" | "media";

type SurfaceOwnProps = {
  variant?: SurfaceVariant;
  /** Adds the documented hover/focus/active interaction language (light variant only — cards are interactive). */
  interactive?: boolean;
  /** Renders as a nested, slightly-lower-opacity frost fill (e.g. an expanded detail panel beneath its trigger card). */
  nested?: boolean;
  className?: string;
  children?: ReactNode;
};

type SurfaceProps<T extends ElementType> = SurfaceOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof SurfaceOwnProps | "as">;

export default function Surface<T extends ElementType = "div">({
  as,
  variant = "light",
  interactive = false,
  nested = false,
  className = "",
  children,
  ...rest
}: SurfaceProps<T>) {
  const Component = as ?? "div";
  const variantClass =
    variant === "media" ? "frost-media" : nested ? "frost-light-nested" : "frost-light";
  const interactiveClass =
    interactive && variant === "light"
      ? "frost-light-hover cursor-pointer transition-all duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-0"
      : "";

  return (
    <Component className={`${variantClass} ${interactiveClass} ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
}
