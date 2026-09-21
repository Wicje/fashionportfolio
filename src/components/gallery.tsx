"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { CATEGORIES, WORKS, type Work, type WorkCategory } from "@/data/works";

const PALETTES: Record<Work["palette"], string> = {
  stone: "from-charcoal via-[#3a3e45] to-charcoal",
  sand: "from-peach via-[#f7c9a8] to-peach",
  rose: "from-[#e8b4a0] via-offwhite to-peach",
  clay: "from-ember via-peach to-[#e8b4a0]",
  mist: "from-[#d8d2c7] via-offwhite to-[#b8b0a1]",
  noir: "from-black via-charcoal to-[#3a3e45]",
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
      <Text as="h1" className="font-serif text-charcoal">
        Selected Work
      </Text>
      <Text className="mt-3 max-w-xl text-charcoal/70">
        Editorial, campaign, and portrait work. Filter by category to browse.
      </Text>

      <div role="group" aria-label="Filter works by category" className="mt-8 flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((category) => (
          <Button
            key={category}
            variant={active === category ? "peach" : "outline"}
            size="sm"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-charcoal/30 bg-charcoal/5 px-6 py-16 text-center">
          <Text as="h2" className="font-serif text-2xl text-charcoal">
            No works in {active} yet
          </Text>
          <Text className="mx-auto mt-2 max-w-md text-charcoal/70">
            New work is on its way. Browse another category in the meantime.
          </Text>
        </div>
      ) : (
        <ul aria-label={`Works${active === "All" ? "" : ` in ${active}`}`} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((work) => (
            <li key={work.id}>
              <figure className="overflow-hidden rounded-xl border border-charcoal/15 bg-offwhite">
                <div
                  role="img"
                  aria-label={work.alt}
                  className={`flex aspect-[3/4] items-end bg-gradient-to-br p-5 ${PALETTES[work.palette]}`}
                >
                  <span aria-hidden="true" className="rounded-full bg-peach px-3 py-1 font-serif text-sm italic text-charcoal">
                    {work.title}
                  </span>
                </div>
                <figcaption className="flex items-baseline justify-between gap-3 px-4 py-3">
                  <span className="font-serif text-base text-charcoal">{work.title}</span>
                  <span className="shrink-0 text-xs tracking-wide text-charcoal/70 uppercase">{work.category}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
