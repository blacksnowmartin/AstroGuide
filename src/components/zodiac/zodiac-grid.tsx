import Link from 'next/link';
import Image from 'next/image';
import { ZODIAC_SIGNS } from '@/lib/constants';

export function ZodiacGrid() {
  return (
    <div className="zodiac-grid">
      {ZODIAC_SIGNS.map((sign) => (
        <Link
          key={sign.name}
          href={`/${sign.name.toLowerCase()}`}
          className="zodiac-icon"
        >
          <div className={`${sign.name.toLowerCase()}-bg p-2 rounded-full mb-2`}>
            <Image
              src={`/img/zodiac/${sign.name.toLowerCase()}.png`}
              alt={sign.name}
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <span className="font-bold">{sign.name}</span>
          <span className="text-xs text-gray-600">{sign.dates}</span>
        </Link>
      ))}
    </div>
  );
}
