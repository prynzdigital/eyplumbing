import { ReactNode } from "react";
import { CheckIcon } from "./icons";

// Badge/TrustSignal — holds only currently-confirmable claims
// (design-system.md §6). Never render an invented credential here.
export default function TrustBadge({
  children,
  variant = "pill",
}: {
  children: ReactNode;
  variant?: "pill" | "card";
}) {
  if (variant === "card") {
    return (
      <div className="flex flex-col items-start gap-xs rounded-md border border-secondary bg-sky-tint p-md">
        <CheckIcon className="text-secondary" width={20} height={20} />
        <p className="text-body font-medium text-ink">{children}</p>
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-xs rounded-full border border-secondary bg-sky-tint px-md py-xs text-small lg:text-small-lg font-medium text-ink">
      <CheckIcon className="text-secondary shrink-0" width={16} height={16} />
      {children}
    </span>
  );
}
