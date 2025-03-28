export type ZodiacSign = {
  name: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  symbol: string;
  dates: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  ruling: string;
};

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: 'Aries',
    element: 'Fire',
    symbol: '♈',
    dates: 'Mar 21 - Apr 19',
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    ruling: 'Mars'
  },
  {
    name: 'Taurus',
    element: 'Earth',
    symbol: '♉',
    dates: 'Apr 20 - May 20',
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    ruling: 'Venus'
  },
  {
    name: 'Gemini',
    element: 'Air',
    symbol: '♊',
    dates: 'May 21 - Jun 20',
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    ruling: 'Mercury'
  },
  {
    name: 'Cancer',
    element: 'Water',
    symbol: '♋',
    dates: 'Jun 21 - Jul 22',
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    ruling: 'Moon'
  },
  {
    name: 'Leo',
    element: 'Fire',
    symbol: '♌',
    dates: 'Jul 23 - Aug 22',
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    ruling: 'Sun'
  },
  {
    name: 'Virgo',
    element: 'Earth',
    symbol: '♍',
    dates: 'Aug 23 - Sep 22',
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    ruling: 'Mercury'
  },
  {
    name: 'Libra',
    element: 'Air',
    symbol: '♎',
    dates: 'Sep 23 - Oct 22',
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    ruling: 'Venus'
  },
  {
    name: 'Scorpio',
    element: 'Water',
    symbol: '♏',
    dates: 'Oct 23 - Nov 21',
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    ruling: 'Pluto'
  },
  {
    name: 'Sagittarius',
    element: 'Fire',
    symbol: '♐',
    dates: 'Nov 22 - Dec 21',
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    ruling: 'Jupiter'
  },
  {
    name: 'Capricorn',
    element: 'Earth',
    symbol: '♑',
    dates: 'Dec 22 - Jan 19',
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    ruling: 'Saturn'
  },
  {
    name: 'Aquarius',
    element: 'Air',
    symbol: '♒',
    dates: 'Jan 20 - Feb 18',
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    ruling: 'Uranus'
  },
  {
    name: 'Pisces',
    element: 'Water',
    symbol: '♓',
    dates: 'Feb 19 - Mar 20',
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    ruling: 'Neptune'
  }
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const NAV_LINKS = [
  { name: 'Zodiac Signs', path: '/zodiac-signs' },
  { name: 'Daily Horoscope', path: '/daily-horoscope' },
  { name: 'Birthday Analyzer', path: '/birthday-analyzer' }
];

export const SIDE_MENU_LINKS = [
  { name: 'Zodiac Signs', path: '/zodiac-signs' },
  { name: 'Horoscope', path: '/horoscope' },
  { name: 'Daily Horoscope', path: '/daily-horoscope' },
  { name: 'Birthday Analyzer', path: '/birthday-analyzer' },
  { name: 'Numerology', path: '/numerology' },
  { name: 'Love', path: '/love' },
  { name: 'Health', path: '/health' },
  { name: 'Money & Career', path: '/money-career' },
  { name: 'Compatibility', path: '/compatibility' },
  { name: 'Astrology', path: '/astrology' },
  { name: 'Birthdays', path: '/birthdays' },
  { name: '4 Elements', path: '/4-elements' },
  { name: 'Chinese Western', path: '/chinese-western' },
  { name: 'Quotes', path: '/quotes' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

export const FOOTER_LINKS = {
  group1: [
    { name: 'About Us', path: '/about-us' },
    { name: 'Mission', path: '/mission' },
    { name: 'Editorial policy', path: '/editorial-policy' }
  ],
  group2: [
    { name: 'Authors', path: '/authors' },
    { name: 'Community', path: '/community' },
    { name: 'Cookie Policy', path: '/cookie-policy' }
  ],
  group3: [
    { name: 'Feedback', path: '/feedback' },
    { name: 'References', path: '/references' },
    { name: 'Disclaimer', path: '/disclaimer' }
  ]
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/' },
  { name: 'Twitter', url: 'https://twitter.com/' },
  { name: 'Instagram', url: 'https://www.instagram.com/' },
  { name: 'Pinterest', url: 'https://www.pinterest.com/' }
];
