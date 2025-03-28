import Link from 'next/link';
import Image from 'next/image';
import { generateDummyHoroscope } from '@/lib/utils';

interface DailyHoroscopeCardProps {
  sign: string;
  date: string;
}

export function DailyHoroscopeCard({ sign, date }: DailyHoroscopeCardProps) {
  const horoscopeText = generateDummyHoroscope(sign);
  const truncatedText = horoscopeText.length > 120
    ? horoscopeText.substring(0, 120) + '...'
    : horoscopeText;

  return (
    <div className="horoscope-card">
      <div className="flex-shrink-0">
        <Image
          src={`/img/daily-horoscope/${sign.toLowerCase()}.png`}
          alt={sign}
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-lg">{sign} Daily Horoscope {date}</h3>
        <p className="text-gray-700 text-sm mt-1">{truncatedText}</p>
        <Link
          href={`/daily-horoscope/${sign.toLowerCase()}`}
          className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
        >
          more
        </Link>
      </div>
    </div>
  );
}
