import { ReactNode } from "react";

// Mobile-first grid/container per design-system.md §4:
// base: 100% width, 16px padding · sm: max 688px, 32px padding ·
// lg: max 1200px, 40px padding · xl: max 1280px, centered.
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full mx-auto px-4 sm:px-8 sm:max-w-[688px] lg:max-w-[1200px] lg:px-10 xl:max-w-[1280px] ${className}`}
    >
      {children}
    </div>
  );
}
