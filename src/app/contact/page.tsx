import type { Metadata } from "next";
import { Text } from "@/components/ui/text";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Collaborate with ${SITE.name}, aspiring model.`,
};

export default function ContactPage() {
  return (
    <main className="bg-stone-50">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-2xl flex-col justify-center px-4 py-16 text-center sm:px-6 sm:py-24">
        <Text as="h1" className="font-serif">
          Let&apos;s make something
        </Text>
        <Text className="mx-auto mt-4 max-w-md text-lg">
          Currently open to editorial, campaign, and portrait collaborations.
          Tell me about your project — I reply within two days.
        </Text>
        <div className="mt-10">
          <a
            href={`mailto:${SITE.bookingEmail}`}
            className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-900 px-8 text-base font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
          >
            {SITE.bookingEmail}
          </a>
        </div>
        {SITE.socials.length > 0 && (
          <ul className="mt-8 flex justify-center gap-6">
            {SITE.socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} className="text-sm font-medium text-neutral-700 underline underline-offset-4 hover:text-neutral-900">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
