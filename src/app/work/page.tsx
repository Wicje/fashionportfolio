import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";

export const metadata: Metadata = {
  title: "The Book",
  description: "Every frame from Ani Chisom's Africanus session, in shoot order.",
};

export default function WorkPage() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
