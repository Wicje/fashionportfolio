import type { Metadata } from "next";
import { BlueprintPage } from "@/components/blueprint-page";
import { Gallery } from "@/components/gallery";
import { WORKS } from "@/data/works";

export const metadata: Metadata = {
  title: "The Book",
  description: "Every frame from Ani Chisom's Africanus session, in shoot order.",
};

export default function WorkPage() {
  return (
    <main className="py-6 sm:py-8">
      <BlueprintPage
        index="04"
        label="The book"
        title="Every frame"
        lede="The full Africanus session, in shoot order. No selects hidden, no fillers added."
        meta={`${WORKS.length} frames`}
      >
        <Gallery />
      </BlueprintPage>
    </main>
  );
}
