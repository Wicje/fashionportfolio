import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { WORKS, type Work } from "@/data/works";

export interface GalleryProps {
  works?: Work[];
}

export function WorkCard({ work }: { work: Work }) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-charcoal/15 bg-offwhite">
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal/10">
        <Image
          src={work.src}
          alt={work.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <figcaption className="flex items-baseline justify-between gap-3 px-4 py-3">
        <span className="font-display text-base text-charcoal">{work.title}</span>
        <span className="shrink-0 text-xs tracking-wide text-charcoal/70 uppercase">Africanus session</span>
      </figcaption>
    </figure>
  );
}

export function Gallery({ works = WORKS }: GalleryProps) {
  return (
    <Container className="py-12 sm:py-16">
      <Text as="h1" className="font-display text-charcoal">
        The Book
      </Text>
      <Text className="mt-3 max-w-xl text-charcoal/70">
        {works.length} frames, one session. The full Africanus book, in shoot order.
      </Text>

      {works.length === 0 ? (
        <div className="mt-10 rounded-xl border border-dashed border-charcoal/30 bg-charcoal/5 px-6 py-16 text-center">
          <Text as="h2" className="font-display text-2xl text-charcoal">
            No frames yet
          </Text>
          <Text className="mx-auto mt-2 max-w-md text-charcoal/70">
            New work is on its way — check back soon.
          </Text>
        </div>
      ) : (
        <ul aria-label="All frames" className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <li key={work.id}>
              <WorkCard work={work} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
