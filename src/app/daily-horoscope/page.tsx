import { SiteLayout } from "@/components/layout/site-layout";
import { DailyHoroscopeCard } from "@/components/horoscope/daily-horoscope-card";
import { BirthdaySelector } from "@/components/zodiac/birthday-selector";
import { ZODIAC_SIGNS } from "@/lib/constants";

export default function DailyHoroscopePage() {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <SiteLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Daily Horoscope</h1>
        <p className="text-gray-700 mb-8">
          This daily horoscope can bring you a little smile at the beginning of your day or can help you change it and might even impact in a positive way how you spent your time.
        </p>

        <div className="mb-10">
          <BirthdaySelector />
        </div>

        {ZODIAC_SIGNS.map((sign) => (
          <div key={sign.name} className="mb-8">
            <h3 className={`section-header ${sign.name.toLowerCase()}-section`}>
              {sign.name} Daily Horoscope
            </h3>
            <DailyHoroscopeCard
              sign={sign.name}
              date={formattedDate}
            />
          </div>
        ))}
      </div>
    </SiteLayout>
  );
}
