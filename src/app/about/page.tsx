import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { BIO, CREDITS, SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Bio, credits, and clients of ${SITE.name}, fashion photographer.`,
};

export default function AboutPage() {
  return (
    <main className="bg-stone-50">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-[2fr_3fr] sm:gap-12">
          <div
            role="img"
            aria-label={`Stand-in portrait of ${SITE.name}`}
            className="flex aspect-[3/4] items-end bg-gradient-to-br from-stone-200 via-amber-50 to-stone-300 p-5 rounded-xl border border-neutral-200"
          >
            <span aria-hidden="true" className="font-serif text-lg italic text-neutral-800/70">
              Portrait to come
            </span>
          </div>
          <div>
            <Text as="h1" className="font-serif">
              About
            </Text>
            {BIO.map((paragraph) => (
              <Text key={paragraph.slice(0, 24)} className="mt-4">
                {paragraph}
              </Text>
            ))}
            {CREDITS.length > 0 && (
              <>
                <Text as="h2" className="mt-10 font-serif text-2xl">
                  Selected credits
                </Text>
                <ul className="mt-4 space-y-2">
                  {CREDITS.map((credit) => (
                    <li key={credit} className="border-b border-neutral-200 pb-2 text-base text-neutral-700">
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
