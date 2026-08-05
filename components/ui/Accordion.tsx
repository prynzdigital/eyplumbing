"use client";

import { useState } from "react";
import { FaqCategory } from "@/lib/constants";
import { ChevronIcon } from "./icons";
import Surface from "./Surface";

// Accordion/FAQ (UPDATED — now Frost/Light, and now a first-class #faq
// section, design-system.md §6). Renders faq.md content grouped by
// category. Multiple questions may be expanded simultaneously (no
// "fighting" accordion behavior, per spec).
export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="mx-auto flex max-w-[720px] flex-col gap-2xl">
      {categories.map((category) => (
        <div key={category.id} id={category.id} className="scroll-mt-24">
          <h3 className="mb-sm text-h3 font-bold text-ink">{category.title}</h3>
          <div className="flex flex-col gap-xs">
            {category.items.map((item) => (
              <FaqRow key={item.question} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function FaqRow({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <Surface className="overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[48px] w-full items-center justify-between gap-md px-md py-sm text-left transition-colors hover:bg-frost-light-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <span className="text-body font-medium text-ink">{item.question}</span>
        <ChevronIcon
          className={`shrink-0 text-secondary transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          width={20}
          height={20}
        />
      </button>
      {open && <div className="px-md pb-md text-body text-ink-muted">{item.answer}</div>}
    </Surface>
  );
}
