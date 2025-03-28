import { SiteLayout } from "@/components/layout/site-layout";
import { ZodiacGrid } from "@/components/zodiac/zodiac-grid";
import { ZodiacCalendar } from "@/components/zodiac/zodiac-calendar";
import Link from "next/link";
import Image from "next/image";

export default function ZodiacSignsPage() {
  return (
    <SiteLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Zodiac Signs Facts By Horoscope Dates</h1>
        <p className="text-gray-700 mb-8">
          This page presents the zodiac signs by their horoscope dates with a focus on their significance and influence on personality and life path:
        </p>

        <ZodiacGrid />

        <div className="my-12">
          <ZodiacCalendar />
        </div>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">More Facts About Zodiac Signs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-4 border border-slate-200 rounded-md">
              <div className="flex-shrink-0">
                <Image
                  src="https://ext.same-assets.com/214216173/577201697.png"
                  alt="Zodiac Signs"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="font-bold mb-1">Mnemonics for the Horoscope</h3>
                <p className="text-sm text-gray-600">
                  Most of the world is familiar with the collection of the twelve zodiac signs in the Western astrology but few can today name all.
                </p>
                <Link
                  href="/astrology/mnemonics"
                  className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-slate-200 rounded-md">
              <div className="flex-shrink-0">
                <Image
                  src="https://ext.same-assets.com/214216173/577201697.png"
                  alt="Zodiac Signs"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="font-bold mb-1">About Zodiac Signs</h3>
                <p className="text-sm text-gray-600">
                  Western astrology focuses on the twelve zodiac signs. Each of these signs has specific rules in which the Sun is placed in that...
                </p>
                <Link
                  href="/astrology/about-zodiac-signs"
                  className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-slate-200 rounded-md">
              <div className="flex-shrink-0">
                <Image
                  src="https://ext.same-assets.com/214216173/577201697.png"
                  alt="Zodiac Signs"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="font-bold mb-1">The Houses of the Zodiac</h3>
                <p className="text-sm text-gray-600">
                  Astrology has divided the space of the zodiac in twelve places for the twelve zodiac signs and into twelve other places (called h...
                </p>
                <Link
                  href="/astrology/houses-of-zodiac"
                  className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="flex gap-4 p-4 border border-slate-200 rounded-md">
              <div className="flex-shrink-0">
                <Image
                  src="https://ext.same-assets.com/214216173/577201697.png"
                  alt="Zodiac Signs"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="font-bold mb-1">Zodiac Signs Symbols</h3>
                <p className="text-sm text-gray-600">
                  Each of the twelve zodiac signs is represented in astrology by a specific chosen symbol. The evolution of symbols is usually atmi...
                </p>
                <Link
                  href="/astrology/zodiac-symbols"
                  className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/zodiac-signs/news"
              className="inline-flex items-center justify-center py-3 px-6 bg-[#8e4857] text-white rounded-md font-medium hover:bg-[#72394a] transition-colors"
            >
              Check All Zodiac Signs News
            </Link>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
