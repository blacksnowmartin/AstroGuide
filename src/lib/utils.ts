import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZODIAC_SIGNS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getZodiacSign(month: number, day: number) {
  return ZODIAC_SIGNS.find((sign) => {
    if (sign.startMonth === sign.endMonth) {
      return month === sign.startMonth && day >= sign.startDay && day <= sign.endDay;
    }

    if (month === sign.startMonth) {
      return day >= sign.startDay;
    }

    if (month === sign.endMonth) {
      return day <= sign.endDay;
    }

    return month > sign.startMonth && month < sign.endMonth;
  });
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString('en-US', options);
}

export function getDaysInMonth(year: number, month: number): number {
  // Month is 0-based in JavaScript Date (0 = January, 11 = December)
  return new Date(year, month, 0).getDate();
}

export function generateDummyHoroscope(sign: string): string {
  const intros = [
    "Today brings an opportunity for",
    "The stars align for",
    "You might find yourself focusing on",
    "This is a good day to consider",
    "Your planetary ruler suggests"
  ];

  const topics = [
    "personal growth and self-reflection",
    "relationships and social connections",
    "career advancement and professional goals",
    "creative pursuits and artistic expression",
    "financial matters and material security",
    "health and physical wellbeing",
    "spiritual development and inner peace"
  ];

  const advice = [
    "Take time to listen to your intuition.",
    "Don't be afraid to step outside your comfort zone.",
    "Communication is key to resolving any conflicts.",
    "Balance work and play for optimal results.",
    "Trust in your abilities and natural talents.",
    "Consider a new approach to an old problem.",
    "Patience will serve you well today."
  ];

  const randomIntro = intros[Math.floor(Math.random() * intros.length)];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const randomAdvice = advice[Math.floor(Math.random() * advice.length)];

  return `${randomIntro} ${randomTopic}. ${randomAdvice}`;
}
