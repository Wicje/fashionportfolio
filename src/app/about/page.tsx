import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { BIO, CREDITS, SITE } from "@/data/site";
import { PORTRAIT_ALT, PORTRAIT_SRC } from "@/data/works";

export const metadata: Metadata = {
  title: "About",
  description: `Bio of ${SITE.name}, engineer and aspiring model.`,
};

export default function AboutPage() {
  return (
    <main className="bg-offwhite">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-[2fr_3fr] sm:gap-12">
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
          <div>
            <Text as="h1" className="font-display text-charcoal">
              About
            </Text>
            {BIO.map((paragraph) => (
              <Text key={paragraph.slice(0, 24)} className="mt-4 text-charcoal/80">
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
      </Container>
    </main>
  );
}
