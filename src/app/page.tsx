import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { WorkCard } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import { Text } from "@/components/ui/text";
import { SITE } from "@/data/site";
import { WORKS } from "@/data/works";

export const metadata: Metadata = {
  title: `${SITE.name} — Aspiring Model`,
  description: "Ani Chisom — engineer and aspiring model. Editorial, campaign, and portrait collaborations.",
};

const PREVIEW = WORKS.slice(0, 3);

function SectionIndex({ value, label }: { value: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-ember uppercase">
      <span aria-hidden="true">{value}</span>
      <span aria-hidden="true" className="h-px w-10 bg-ember/60" />
      <span>{label}</span>
    </p>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero — one idea: the name over the treated frame */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-cobalt">
        {/* True two-tone duotone: luminance mapped cobalt shadows → ivory highlights */}
        <svg aria-hidden="true" className="absolute h-0 w-0">
          <defs>
            <filter id="africanus-duotone">
              <feColorMatrix
                type="matrix"
                values="0.183 0.617 0.062 0 0.118  0.152 0.511 0.052 0 0.251  0.053 0.180 0.018 0 0.686  0 0 0 1 0"
              />
            </filter>
          </defs>
        </svg>
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/book/ani-21.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top duotone-frame"
          />
        </div>
        <div aria-hidden="true" className="halftone absolute inset-0" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-cobalt via-cobalt/35 to-cobalt/10" />
        <Container className="relative py-20 sm:py-32">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-offwhite/90 uppercase">
              {SITE.tagline} — Africanus session
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Text as="h1" id="hero-heading" className="mt-4 max-w-3xl font-display text-6xl leading-[1.02] text-offwhite sm:text-8xl">
              {SITE.name}
              <span aria-hidden="true" className="text-peach">.</span>
            </Text>
          </Reveal>
          <Reveal delay={200}>
            <Text className="mt-6 max-w-xl text-lg text-offwhite/90">
              Hardware and software engineer by craft, model by calling — open to
              editorial, campaign, and portrait collaborations.
            </Text>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-peach px-6 text-base font-medium text-charcoal transition-colors hover:bg-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offwhite focus-visible:ring-offset-2 focus-visible:ring-offset-cobalt"
              >
                Book Ani
              </Link>
              <Link
                href="/work"
                className="inline-flex h-12 items-center justify-center rounded-md border border-offwhite/40 bg-transparent px-6 text-base font-medium text-offwhite transition-colors hover:bg-offwhite/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offwhite focus-visible:ring-offset-2 focus-visible:ring-offset-cobalt"
              >
                View selected work
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Selected work preview — one idea: the imagery */}
      <section aria-labelledby="work-heading" className="border-b border-charcoal/15">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <SectionIndex value="01" label="The book" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <Text as="h2" id="work-heading" className="font-display text-charcoal">
                Selected work
              </Text>
              <Link
                href="/work"
                className="rounded-sm text-sm font-medium text-ember underline underline-offset-4 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
              >
                Browse the full book
              </Link>
            </div>
          </Reveal>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PREVIEW.map((work, index) => (
              <li key={work.id}>
                <Reveal delay={index === 0 ? 0 : 100}>
                  <WorkCard work={work} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* About teaser — one idea: the duality */}
      <section aria-labelledby="about-heading" className="border-b border-charcoal/15">
        <Container className="grid gap-6 py-12 sm:grid-cols-[1fr_2fr] sm:gap-12 sm:py-16">
          <Reveal>
            <SectionIndex value="02" label="The profile" />
            <Text as="h2" id="about-heading" className="mt-4 font-display text-2xl text-charcoal">
              Engineer,
              <br />
              meet muse
            </Text>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col justify-end">
              <Text className="text-charcoal/80">
                {SITE.name} — {SITE.aka} to those who know him — builds hardware
                and software by day and steps in front of the camera by calling.
                Technical mind, model presence.
              </Text>
              <Link
                href="/about"
                className="mt-4 inline-block self-start rounded-sm text-sm font-medium text-ember underline underline-offset-4 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
              >
                Read the full story
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA band — one idea: the conversion */}
      <section aria-labelledby="book-heading" className="grain bg-charcoal text-offwhite">
        <Container className="py-14 text-center sm:py-20">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.2em] text-offwhite/80 uppercase">03 — The booking</p>
            <Text as="h2" id="book-heading" className="mx-auto mt-4 max-w-xl font-display text-offwhite">
              Got a concept? Let&apos;s shoot it.
            </Text>
            <Text className="mx-auto mt-4 max-w-md text-offwhite/80">
              Editorial, campaign, portrait — one email starts the collaboration.
            </Text>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-peach px-8 text-base font-medium text-charcoal transition-all hover:-translate-y-0.5 hover:bg-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
            >
              Book Ani
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
