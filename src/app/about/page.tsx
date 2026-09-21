import type { Metadata } from "next";
import Image from "next/image";
import { BlueprintPage } from "@/components/blueprint-page";
import { Text } from "@/components/ui/text";
import { BIO, CREDITS, SITE } from "@/data/site";
import { PORTRAIT_ALT, PORTRAIT_SRC } from "@/data/works";

export const metadata: Metadata = {
  title: "About",
  description: `Bio of ${SITE.name}, engineer and aspiring model.`,
};

export default function AboutPage() {
  return (
    <main className="py-6 sm:py-8">
      <BlueprintPage
        index="05"
        label="The profile"
        title="Engineer, meet muse"
        meta="Frame Nº 14"
      >
        <div className="grid gap-10 sm:grid-cols-[2fr_3fr] sm:gap-12">
          <figure>
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-charcoal/15 bg-charcoal/10">
              <Image
                src={PORTRAIT_SRC}
                alt={PORTRAIT_ALT}
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] tracking-[0.14em] text-charcoal/60 uppercase">
              Portrait — Frame Nº 14
            </figcaption>
          </figure>
          <div>
            {BIO.map((paragraph, i) => (
              <Text key={paragraph.slice(0, 24)} className={i === 0 ? "text-lg text-charcoal" : "mt-4 text-charcoal/80"}>
                {paragraph}
              </Text>
            ))}
            {CREDITS.length > 0 && (
              <>
                <Text as="h2" className="mt-10 font-display text-2xl text-charcoal">
                  Selected credits
                </Text>
                <ul className="mt-4 space-y-2">
                  {CREDITS.map((credit) => (
                    <li key={credit} className="border-b border-charcoal/15 pb-2 text-base text-charcoal/80">
                      {credit}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </BlueprintPage>
    </main>
  );
}
