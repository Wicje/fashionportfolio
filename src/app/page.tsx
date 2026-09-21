import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE } from "@/data/site";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: `${SITE.name} — Aspiring Model`,
  description: "Ani Chisom — engineer and aspiring model. Editorial, campaign, and portrait collaborations.",
};

export default function Home() {
  return (
    <main className="bg-stone-50">
      <Container className="flex min-h-[85vh] flex-col justify-center py-16 sm:py-24">
        <Text as="span" className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
          {SITE.tagline}
        </Text>
        <Text as="h1" className="mt-4 max-w-2xl font-serif text-5xl sm:text-7xl">
          {SITE.name}
        </Text>
        <Text className="mt-6 max-w-xl text-lg">
          Hardware and software engineer by craft, model by calling — open to
          editorial, campaign, and portrait collaborations.
        </Text>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-900 px-6 text-base font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            Book Ani
          </Link>
          <Link
            href="/work"
            className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-300 bg-transparent px-6 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
          >
            View selected work
          </Link>
        </div>
      </Container>
    </main>
  );
}
