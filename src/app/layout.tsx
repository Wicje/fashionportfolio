import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Fashion Photographer`,
    template: `%s — ${SITE.name}`,
  },
  description: "Editorial, campaign, and portrait fashion photography. Available for bookings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-neutral-900">
        <header className="border-b border-neutral-200 bg-stone-50">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="font-serif text-xl rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            >
              {SITE.name}
            </Link>
            <SiteNav />
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t border-neutral-200">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 sm:px-6">
            <p className="text-sm text-neutral-600">
              © {new Date().getFullYear()} {SITE.name} — {SITE.role}
            </p>
            <a
              href={`mailto:${SITE.bookingEmail}`}
              className="rounded-sm text-sm font-medium text-neutral-600 underline underline-offset-4 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            >
              {SITE.bookingEmail}
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
