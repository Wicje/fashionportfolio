import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { SITE } from "@/data/site";
import { WORKS } from "@/data/works";

export const metadata: Metadata = {
  title: `${SITE.name} — Aspiring Model`,
  description: "Ani Chisom — engineer and aspiring model. Editorial, campaign, and portrait collaborations.",
};

const PREVIEW = WORKS.slice(0, 3);

export default function Home() {
  return (
    <main>
      {/* Hero — one idea: the name + the ask */}
      <section aria-labelledby="hero-heading" className="border-b border-charcoal/15">
        <Container className="py-16 sm:py-24">
          <Text as="span" className="text-xs font-medium tracking-[0.2em] text-ember uppercase">
            {SITE.tagline}
          </Text>
          <Text as="h1" id="hero-heading" className="mt-4 max-w-3xl font-serif text-5xl text-charcoal sm:text-7xl">
            {SITE.name}
            <span aria-hidden="true" className="text-peach">.</span>
          </Text>
          <Text className="mt-6 max-w-xl text-lg text-charcoal/80">
            Hardware and software engineer by craft, model by calling — open to
            editorial, campaign, and portrait collaborations.
          </Text>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-peach px-6 text-base font-medium text-charcoal transition-colors hover:bg-ember hover:text-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
            >
              Book Ani
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center rounded-md border border-charcoal/25 bg-transparent px-6 text-base font-medium text-charcoal transition-colors hover:bg-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
            >
              View selected work
            </Link>
          </div>
        </Container>
      </section>

      {/* Selected work preview — one idea: the imagery */}
      <section aria-labelledby="work-heading" className="border-b border-charcoal/15">
        <Container className="py-12 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Text as="h2" id="work-heading" className="font-serif text-charcoal">
              Selected work
            </Text>
            <Link
              href="/work"
              className="rounded-sm text-sm font-medium text-ember underline underline-offset-4 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
            >
              Browse the full book
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PREVIEW.map((work) => (
              <li key={work.id}>
                <figure className="overflow-hidden rounded-xl border border-charcoal/15 bg-offwhite">
                  <div
                    role="img"
                    aria-label={work.alt}
                    className="flex aspect-[3/4] items-end bg-gradient-to-br from-ember via-peach to-[#e8b4a0] p-5"
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
        </Container>
      </section>

      {/* About teaser — one idea: the duality */}
      <section aria-labelledby="about-heading" className="border-b border-charcoal/15">
        <Container className="grid gap-6 py-12 sm:grid-cols-[1fr_2fr] sm:gap-12 sm:py-16">
          <Text as="h2" id="about-heading" className="font-serif text-2xl text-charcoal">
            Engineer,
            <br />
            meet muse
          </Text>
          <div>
            <Text className="text-charcoal/80">
              {SITE.name} — {SITE.aka} to those who know him — builds hardware
              and software by day and steps in front of the camera by calling.
              Technical mind, model presence.
            </Text>
            <Link
              href="/about"
              className="mt-4 inline-block rounded-sm text-sm font-medium text-ember underline underline-offset-4 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
            >
              Read the full story
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA band — one idea: the conversion */}
      <section aria-labelledby="book-heading" className="bg-charcoal text-offwhite">
        <Container className="py-14 text-center sm:py-20">
          <Text as="h2" id="book-heading" className="mx-auto max-w-xl font-serif text-offwhite">
            Got a concept? Let&apos;s shoot it.
          </Text>
          <Text className="mx-auto mt-4 max-w-md text-offwhite/80">
            Editorial, campaign, portrait — one email starts the collaboration.
          </Text>
          <Link
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-peach px-8 text-base font-medium text-charcoal transition-colors hover:bg-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            Book Ani
          </Link>
        </Container>
      </section>
    </main>
  );
}
