import Link from 'next/link';
import { MONTHS, ZODIAC_SIGNS } from '@/lib/constants';
import { getDaysInMonth } from '@/lib/utils';

export function ZodiacCalendar() {
  const currentYear = new Date().getFullYear();

  const getZodiacSignForDate = (month: number, day: number) => {
    return ZODIAC_SIGNS.find(sign => {
      if (sign.startMonth === sign.endMonth) {
        return month === sign.startMonth && day >= sign.startDay && day <= sign.endDay;
      }

      if (month === sign.startMonth) {
        return day >= sign.startDay;
      }

      if (month === sign.endMonth) {
        return day <= sign.endDay;
      }

      return (month > sign.startMonth && month < sign.endMonth);
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center p-4 bg-[#8e4857] text-white rounded-md mb-6">
        Click on your birthday in the calendar and discover your zodiac sign!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MONTHS.map((monthName, monthIndex) => {
          const month = monthIndex + 1;
          const daysInMonth = getDaysInMonth(currentYear, month);
          const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

          return (
            <div key={monthName} className="mb-8">
              <h3 className="text-lg font-bold mb-4">{monthName}</h3>
              <div className="grid grid-cols-7 gap-1">
                {days.map(day => {
                  const sign = getZodiacSignForDate(month, day);
                  const bgColorClass = sign ? `${sign.name.toLowerCase()}-bg` : '';

                  return (
                    <Link
                      key={`${month}-${day}`}
                      href={`/zodiac-signs/${monthName.toLowerCase()}-${day}`}
                      className={`${bgColorClass} w-8 h-8 flex items-center justify-center rounded-full text-sm hover:opacity-80 transition-opacity`}
                    >
                      {day}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
