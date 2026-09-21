import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SITE } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Aspiring Model`,
    template: `%s — ${SITE.name}`,
  },
  description: "Ani Chisom — engineer and aspiring model. Editorial, campaign, and portrait collaborations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-offwhite text-charcoal">
        <header className="border-b border-charcoal/15 bg-offwhite">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="font-display text-xl rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
            >
              {SITE.name}
            </Link>
            <SiteNav />
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer role="contentinfo" aria-label="Site footer" className="bg-offwhite px-3 pt-6 pb-5 sm:px-6 lg:px-10">
          <div className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl bg-charcoal text-offwhite">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[130%] -translate-x-1/2 bg-[linear-gradient(90deg,rgb(242_161_114/0.35),rgb(242_161_114/0.12))] blur-3xl"
            />
            <div className="relative grid w-full gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="flex flex-col items-start gap-4">
                <Link
                  href="/"
                  aria-label={`${SITE.name} home`}
                  className="font-display text-2xl rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                >
                  {SITE.name}
                </Link>
                <p className="max-w-xs text-base leading-6 text-offwhite/70">
                  {SITE.tagline} — open to editorial, campaign, and portrait collaborations.
                </p>
                <a
                  href={`mailto:${SITE.bookingEmail}`}
                  className="rounded-sm text-sm font-medium text-peach underline underline-offset-4 hover:text-offwhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                >
                  {SITE.bookingEmail}
                </a>
              </div>
              <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-2">
                <div className="flex flex-col items-start gap-4">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-offwhite/50 uppercase">
                    Explore
                  </span>
                  <ul className="flex flex-col items-start gap-3">
                    {[
                      { label: "Home", href: "/" },
                      { label: "The Book", href: "/work" },
                      { label: "About", href: "/about" },
                      { label: "Contact", href: "/contact" },
                    ].map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="rounded-sm text-base text-offwhite/80 transition-colors hover:text-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {SITE.socials.length > 0 && (
                  <div className="flex flex-col items-start gap-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-offwhite/50 uppercase">
                      Socials
                    </span>
                    <ul className="flex flex-col items-start gap-3">
                      {SITE.socials.map((social) => (
                        <li key={social.href}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-sm text-base text-offwhite/80 transition-colors hover:text-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                          >
                            {social.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </nav>
            </div>
            <div className="relative flex flex-col items-center justify-end px-4">
              <p
                aria-hidden="true"
                className="watermark-outline w-full text-center font-display text-[18vw] leading-[0.9] font-semibold tracking-tight text-transparent select-none sm:text-[15vw] lg:text-[11rem]"
              >
                AFRICANUS
              </p>
              <p className="pb-5 text-sm text-offwhite/50 select-none">
                © {new Date().getFullYear()} {SITE.name}
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
