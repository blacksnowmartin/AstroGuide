// Daily Horoscope
const zodiacSignSelect = document.getElementById('zodiac-sign-select');
const refreshHoroscopeBtn = document.getElementById('refresh-horoscope-btn');
const horoscopeText = document.getElementById('horoscope-text');

const horoscopes = {
    Aries: 'You will have a great day today!',
    Taurus: 'Be careful with your finances today.',
    Gemini: 'You will meet someone new today.',
    Cancer: 'Take care of your health today.',
    Leo: 'You will have a successful day today.',
    Virgo: 'Be organized and focused today.',
    Libra: 'You will have a balanced day today.',
    Scorpio: 'Be careful with your emotions today.',
    Sagittarius: 'You will have a adventurous day today.',
    Capricorn: 'You will have a productive day today.',
    Aquarius: 'You will have a innovative day today.',
    Pisces: 'You will have a creative day today.'
};

zodiacSignSelect.addEventListener('change', () => {
    const selectedSign = zodiacSignSelect.value;
    horoscopeText.textContent = horoscopes[selectedSign];
});

refreshHoroscopeBtn.addEventListener('click', () => {
    const selectedSign = zodiacSignSelect.value;
    horoscopeText.textContent = horoscopes[selectedSign];
});

// Zodiac Sign Details
const zodiacSignsContainer = document.querySelector('.zodiac-signs-container');

// Compatibility Check
const userZodiacSignSelect = document.getElementById('user-zodiac-sign');
const partnerZodiacSignSelect = document.getElementById('partner-zodiac-sign');
const checkCompatibilityBtn = document.getElementById('check-compatibility-btn');
const compatibilityResult = document.getElementById('compatibility-result');

const compatibilityChart = {
    Aries: { Aries: 80, Taurus: 40, Gemini: 60, Cancer: 50, Leo: 90, Virgo: 70, Libra: 80, Scorpio: 60, Sagittarius: 90, Capricorn: 50, Aquarius: 70, Pisces: 60 },
    Taurus: { Aries: 40, Taurus: 80, Gemini: 50, Cancer: 60, Leo: 50, Virgo: 90, Libra: 70, Scorpio: 80, Sagittarius: 60, Capricorn: 90, Aquarius: 50, Pisces: 70 },
    Gemini: { Aries: 60, Taurus: 50, Gemini: 80, Cancer: 70, Leo: 80, Virgo: 60, Libra: 90, Scorpio: 50, Sagittarius: 90, Capricorn: 60, Aquarius: 80, Pisces: 70 },
    Cancer: { Aries: 50, Taurus: 60, Gemini: 70, Cancer: 80, Leo: 60, Virgo: 50, Libra: 70, Scorpio: 90, Sagittarius: 50, Capricorn: 70, Aquarius: 60, Pisces: 80 },
    Leo: { Aries: 90, Taurus: 50, Gemini: 80, Cancer: 60, Leo: 80, Virgo: 70, Libra: 90, Scorpio: 60, Sagittarius: 90, Capricorn: 50, Aquarius: 70, Pisces: 60 },
    Virgo: { Aries: 70, Taurus: 90, Gemini: 60, Cancer: 50, Leo: 70, Virgo: 80, Libra: 60, Scorpio: 90, Sagittarius: 50, Capricorn: 90, Aquarius: 60, Pisces: 70 },
    Libra: { Aries: 80, Taurus: 70, Gemini: 90, Cancer: 70, Leo: 90, Virgo: 60, Libra: 80, Scorpio: 70, Sagittarius: 90, Capricorn: 60, Aquarius: 80, Pisces: 70 },
    Scorpio: { Aries: 60, Taurus: 80, Gemini: 50, Cancer: 90, Leo: 60, Virgo: 90, Libra: 70, Scorpio: 80, Sagittarius: 50, Capricorn: 90, Aquarius: 60, Pisces: 70 },
    Sagittarius: { Aries: 90, Taurus: 60, Gemini: 90, Cancer: 50, Leo: 90, Virgo: 50, Libra: 90, Scorpio: 50, Sagittarius: 80, Capricorn: 60, Aquarius: 90, Pisces: 50 },
    Capricorn: { Aries: 50, Taurus: 90, Gemini: 60, Cancer: 70, Leo: 50, Virgo: 90, Libra: 60, Scorpio: 90, Sagittarius: 60, Capricorn: 80, Aquarius: 50, Pisces: 70 },
    Aquarius: { Aries: 70, Taurus: 50, Gemini: 80, Cancer: 60, Leo: 70, Virgo: 60, Libra: 80, Scorpio: 60, Sagittarius: 90, Capricorn: 50, Aquarius: 80, Pisces: 60 },
    Pisces: { Aries: 60, Taurus: 70, Gemini: 70, Cancer: 80, Leo: 60, Virgo: 70, Libra: 70, Scorpio: 70, Sagittarius: 50, Capricorn: 70, Aquarius: 60, Pisces: 80 }
};

checkCompatibilityBtn.addEventListener('click', () => {
    const userSign = userZodiacSignSelect.value;
    const partnerSign = partnerZodiacSignSelect.value;
    const compatibility = compatibilityChart[userSign][partnerSign];
    compatibilityResult.textContent = `Your compatibility is ${compatibility}%`;
});

// Numerology Insights
const birthdateInput = document.getElementById('birthdate');
const calculateNumerologyBtn = document.getElementById('calculate-numerology-btn');
const numerologyResult = document.getElementById('numerology-result');

const numerologyChart = {
    1: 'You are a leader and a pioneer.',
    2: 'You are a peacemaker and a diplomat.',
    3: 'You are a creative and a communicator.',
    4: 'You are a hard worker and a practical person.',
    5: 'You are a free spirit and an adventurer.',
    6: 'You are a responsible and a caring person.',
    7: 'You are a thinker and a philosopher.',
    8: 'You are a successful and a confident person.',
    9: 'You are a humanitarian and a visionary.'
};

calculateNumerologyBtn.addEventListener('click', () => {
    const birthdate = birthdateInput.value;
    const day = parseInt(birthdate.split('/')[0]);
    const month = parseInt(birthdate.split('/')[1]);
    const year = parseInt(birthdate.split('/')[2]);
    const lifePathNumber = (day + month + year).toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
    const numerology = numerologyChart[lifePathNumber % 9];
    numerologyResult.textContent = numerology;
});
