"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getZodiacSign, getDaysInMonth } from '@/lib/utils';
import { MONTHS } from '@/lib/constants';

export function BirthdaySelector() {
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(0);
  const [zodiacSign, setZodiacSign] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (month && day) {
      const sign = getZodiacSign(month, day);
      if (sign) {
        setZodiacSign(sign.name);
      }
    }
  };

  const getDaysArray = () => {
    if (!month) return Array.from({ length: 31 }, (_, i) => i + 1);
    const daysInMonth = getDaysInMonth(new Date().getFullYear(), month);
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  return (
    <div className="bg-[#8e4857] text-white p-4 rounded-md">
      <h3 className="text-center font-bold mb-2">What's your birthday?</h3>
      <p className="text-center text-sm mb-4">
        Tell us your birthday and we will reveal your zodiac sign!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          className="flex-1 min-w-[120px] p-2 rounded-md text-gray-800"
          required
        >
          <option value="">Month</option>
          {MONTHS.map((month, index) => (
            <option key={month} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        <select
          value={day}
          onChange={(e) => setDay(Number(e.target.value))}
          className="flex-1 min-w-[80px] p-2 rounded-md text-gray-800"
          required
          disabled={!month}
        >
          <option value="">Day</option>
          {getDaysArray().map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <Button
          type="submit"
          className="flex-1 bg-[#5a2c37] hover:bg-[#4a2430] text-white"
        >
          ZODIAC SIGN
        </Button>
      </form>

      {zodiacSign && (
        <div className="mt-4 p-3 bg-white text-[#333035] rounded-md text-center">
          <p className="font-bold">Your zodiac sign is:</p>
          <p className="text-xl text-primary">{zodiacSign}</p>
        </div>
      )}
    </div>
  );
}
