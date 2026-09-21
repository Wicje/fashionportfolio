"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { CATEGORIES, WORKS, type Work, type WorkCategory } from "@/data/works";

const PALETTES: Record<Work["palette"], string> = {
  stone: "from-stone-200 via-stone-100 to-stone-300",
  sand: "from-amber-100 via-orange-50 to-amber-200",
  rose: "from-rose-100 via-pink-50 to-rose-200",
  clay: "from-orange-200 via-amber-100 to-stone-300",
  mist: "from-slate-200 via-stone-100 to-slate-300",
  noir: "from-stone-500 via-stone-400 to-stone-700",
};

export interface GalleryProps {
  works?: Work[];
  categories?: WorkCategory[];
}

export function Gallery({ works = WORKS, categories = CATEGORIES }: GalleryProps) {
  const [active, setActive] = useState<WorkCategory | "All">("All");
  const visible = active === "All" ? works : works.filter((work) => work.category === active);

  return (
    <Container className="py-12 sm:py-16">
      <Text as="h1" className="font-serif">
        Selected Work
      </Text>
      <Text className="mt-3 max-w-xl">
        Editorial, campaign, and portrait work. Filter by category to browse.
      </Text>

      <div role="group" aria-label="Filter works by category" className="mt-8 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((category) => (
          <Button
            key={category}
            variant={active === category ? "primary" : "outline"}
            size="sm"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-16 text-center">
          <Text as="h2" className="font-serif text-2xl">
            No works in {active} yet
          </Text>
          <Text className="mx-auto mt-2 max-w-md">
            New work is on its way. Browse another category in the meantime.
          </Text>
        </div>
      ) : (
        <ul aria-label={`Works${active === "All" ? "" : ` in ${active}`}`} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((work) => (
            <li key={work.id}>
              <figure className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <div
                  role="img"
                  aria-label={work.alt}
                  className={`flex aspect-[3/4] items-end bg-gradient-to-br p-5 ${PALETTES[work.palette]}`}
                >
                  <span aria-hidden="true" className="font-serif text-lg italic text-neutral-800/70">
                    {work.title}
                  </span>
                </div>
                <figcaption className="flex items-baseline justify-between gap-3 px-4 py-3">
                  <span className="font-serif text-base text-neutral-900">{work.title}</span>
                  <span className="shrink-0 text-xs tracking-wide text-neutral-500 uppercase">{work.category}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
