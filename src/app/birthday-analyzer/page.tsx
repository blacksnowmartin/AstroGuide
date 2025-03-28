"use client";

import { useState } from 'react';
import { SiteLayout } from "@/components/layout/site-layout";
import { BirthdaySelector } from "@/components/zodiac/birthday-selector";
import { ZodiacGrid } from "@/components/zodiac/zodiac-grid";
import { getZodiacSign } from '@/lib/utils';
import { MONTHS } from '@/lib/constants';

interface BirthInfo {
  sign: string;
  element: string;
  ruling: string;
  date: string;
}

export default function BirthdayAnalyzerPage() {
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [birthInfo, setBirthInfo] = useState<BirthInfo | null>(null);

  const handleDateSelect = (month: number, day: number) => {
    setSelectedMonth(month);
    setSelectedDay(day);

    const sign = getZodiacSign(month, day);
    const monthName = MONTHS[month - 1];

    if (sign) {
      setBirthInfo({
        sign: sign.name,
        element: sign.element,
        ruling: sign.ruling,
        date: `${monthName} ${day}`
      });
    }
  };

  return (
    <SiteLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Birthday Analyzer</h1>
        <p className="text-gray-700 mb-8">
          Find out your zodiac sign and learn about your personality traits based on your birth date. Our birthday analyzer provides personalized insights into your astrological profile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <BirthdaySelector />
          </div>

          <div className="bg-white p-6 rounded-md shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-4">Your Birth Analysis</h2>
            {birthInfo ? (
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-500">Zodiac Sign</h3>
                  <p className="text-lg">{birthInfo.sign}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-500">Element</h3>
                  <p className="text-lg">{birthInfo.element}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-500">Ruling Planet</h3>
                  <p className="text-lg">{birthInfo.ruling}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-500">Birth Date</h3>
                  <p className="text-lg">{birthInfo.date}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 italic">
                Please select your birth date to see your analysis.
              </p>
            )}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">All Zodiac Signs</h2>
          <ZodiacGrid />
        </div>
      </div>
    </SiteLayout>
  );
}
