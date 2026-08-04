"use client";

import { useState } from "react";
import { FaqCategory } from "@/lib/constants";
import { ChevronIcon } from "./icons";

// Accordion/FAQ — renders faq.md content grouped by category
// (design-system.md §6 / style-guide.md §6). Multiple questions may be
// expanded simultaneously (no "fighting" accordion behavior, per spec).
export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col gap-2xl">
      {categories.map((category) => (
        <div key={category.id} id={category.id} className="scroll-mt-24">
          <h3 className="mb-sm text-h3 font-bold text-ink">{category.title}</h3>
          <div className="flex flex-col rounded-md border border-border bg-surface-alt">
            {category.items.map((item, index) => (
              <FaqRow key={item.question} item={item} isLast={index === category.items.length - 1} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FaqRow({
  item,
  isLast,
}: {
  item: { question: string; answer: string };
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={isLast ? "" : "border-b border-border"}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[48px] w-full items-center justify-between gap-md px-md py-sm text-left transition-colors hover:bg-sky-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <span className="text-body font-medium text-ink">{item.question}</span>
        <ChevronIcon
          className={`shrink-0 text-secondary transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          width={20}
          height={20}
        />
      </button>
      {open && (
        <div className="bg-surface px-md pb-md text-body text-ink-muted">{item.answer}</div>
      )}
    </div>
  );
}
