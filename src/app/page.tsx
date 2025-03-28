import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { SiteLayout } from '@/components/layout/site-layout';
import { ZodiacGrid } from '@/components/zodiac/zodiac-grid';
import { DailyHoroscopeCard } from '@/components/horoscope/daily-horoscope-card';
import { BirthdaySelector } from '@/components/zodiac/birthday-selector';
import { ZODIAC_SIGNS } from '@/lib/constants';

export default function Home() {
  const currentDate = formatDate(new Date());
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <SiteLayout>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">The Horoscope</h1>
        <p className="text-gray-700 mb-8">
          TheHoroscope.co is your go to place for daily horoscopes and facts about all 12 zodiac signs.
          It is also your source of inspiration on how astrology impacts your life and compatibilities with those around.
        </p>

        <ZodiacGrid />

        <div className="mt-6 text-center">
          <Link
            href="/horoscope"
            className="inline-flex items-center justify-center py-3 px-6 bg-[#8e4857] text-white rounded-md font-medium hover:bg-[#72394a] transition-colors"
          >
            Check Your Special Horoscope
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Monthly Horoscope</h2>
        <div className="monthly-horoscope-grid">
          {ZODIAC_SIGNS.map((sign) => (
            <Link
              key={sign.name}
              href={`/horoscope/${sign.name.toLowerCase()}`}
              className="flex items-center gap-2 p-3 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
            >
              <Image
                src={`/img/zodiac/${sign.name.toLowerCase()}.png`}
                alt={sign.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm">{sign.name} Monthly Horoscope</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Daily Horoscope {formattedDate}</h2>

        <div className="mb-6">
          <BirthdaySelector />
        </div>

        {ZODIAC_SIGNS.map((sign) => (
          <div key={sign.name} className="mb-6">
            <h3 className={`section-header ${sign.name.toLowerCase()}-section`}>
              {sign.name} Daily Horoscope
            </h3>
            <DailyHoroscopeCard
              sign={sign.name}
              date={formattedDate}
            />
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
