import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Ava Laurent — Fashion Photographer",
  description: "Editorial, campaign, and portrait fashion photography. Available for bookings.",
};

export default function Home() {
  return (
    <main className="bg-stone-50">
      <Container className="flex min-h-[85vh] flex-col justify-center py-16 sm:py-24">
        <Text as="span" className="text-xs font-medium tracking-[0.2em] text-stone-500 uppercase">
          Fashion photographer
        </Text>
        <Text as="h1" className="mt-4 max-w-2xl font-serif text-5xl sm:text-7xl">
          Ava Laurent
        </Text>
        <Text className="mt-6 max-w-xl text-lg">
          Editorial, campaign, and portrait photography with a soft, cinematic eye —
          made for brands, magazines, and muses.
        </Text>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-900 px-6 text-base font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            Book a shoot
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
