// Daily Horoscope
const zodiacSignSelect = document.getElementById('zodiac-sign-select');
const refreshHoroscopeBtn = document.getElementById('refresh-horoscope-btn');
const horoscopeText = document.getElementById('horoscope-text');

const horoscopes = {
    Aries: 'You will have a great day today! Your energy and enthusiasm will open new doors.',
    Taurus: 'Be careful with your finances today. Take time to plan your budget carefully.',
    Gemini: 'You will meet someone new today who could become an important part of your life.',
    Cancer: 'Take care of your health today. Make time for self-care and emotional wellbeing.',
    Leo: 'You will have a successful day today! Your confidence will help you achieve your goals.',
    Virgo: 'Be organized and focused today. Your attention to detail will pay off.',
    Libra: 'You will have a balanced day today. Harmony in relationships brings peace.',
    Scorpio: 'Be careful with your emotions today. Channel your intensity into creative pursuits.',
    Sagittarius: 'You will have an adventurous day today! Embrace new opportunities for growth.',
    Capricorn: 'You will have a productive day today. Your disciplined approach brings success.',
    Aquarius: 'You will have an innovative day today! Your unique ideas will be appreciated.',
    Pisces: 'You will have a creative day today. Your imagination will help solve problems.'
};

zodiacSignSelect.addEventListener('change', () => {
    if (zodiacSignSelect.value) {
        const selectedSign = zodiacSignSelect.value;
        horoscopeText.textContent = horoscopes[selectedSign];
        horoscopeText.classList.add('result-fade-in');
    } else {
        horoscopeText.textContent = '';
    }
});

refreshHoroscopeBtn.addEventListener('click', () => {
    if (zodiacSignSelect.value) {
        const selectedSign = zodiacSignSelect.value;
        horoscopeText.textContent = horoscopes[selectedSign];
        horoscopeText.classList.add('result-fade-in');
    } else {
        alert('Please select a zodiac sign first');
    }
});

// Zodiac Sign Details
const zodiacSignsContainer = document.getElementById('zodiac-signs-container');

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
    1: 'You are a natural leader and pioneer. Independent and determined, you chart your own path in life.',
    2: 'You are a peacemaker and diplomat. Your sensitivity and intuition help you understand others deeply.',
    3: 'You are creative and expressive. Communication comes naturally to you, and you inspire others.',
    4: 'You are a hard worker with practical skills. Reliable and organized, you build solid foundations.',
    5: 'You are a free spirit and adventurer. Your adaptability and curiosity lead to exciting experiences.',
    6: 'You are responsible and caring. Your nurturing nature makes you an excellent caretaker and friend.',
    7: 'You are a thinker and philosopher. Your analytical mind seeks knowledge and spiritual understanding.',
    8: 'You are ambitious and confident. Your practical approach to challenges leads to material success.',
    9: 'You are humanitarian and visionary. Your compassion extends to all, making you a natural healer.'
};

calculateNumerologyBtn.addEventListener('click', () => {
    const birthdate = birthdateInput.value;
    
    // Validate date format (DD/MM/YYYY)
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!datePattern.test(birthdate)) {
        alert('Please enter the birthdate in DD/MM/YYYY format');
        return;
    }
    
    try {
        const parts = birthdate.split('/');
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        
        // Basic date validation
        if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
            alert('Please enter a valid date');
            return;
        }
        
        // Calculate life path number correctly using numerology principles
        // Add all digits together until a single digit is obtained
        const calculateSingleDigit = (num) => {
            if (num <= 9) return num;
            return calculateSingleDigit(num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0));
        };
        
        const dayNumber = calculateSingleDigit(day);
        const monthNumber = calculateSingleDigit(month);
        const yearNumber = calculateSingleDigit(year);
        
        let lifePathNumber = calculateSingleDigit(dayNumber + monthNumber + yearNumber);
        
        // In numerology, 11 and 22 are master numbers (don't reduce)
        if (lifePathNumber === 0) lifePathNumber = 9; // In numerology, 9 is used instead of 0
        
        const numerology = numerologyChart[lifePathNumber];
        numerologyResult.innerHTML = `<strong>Your Life Path Number is ${lifePathNumber}:</strong> ${numerology}`;
        numerologyResult.classList.add('result-fade-in');
        
    } catch (error) {
        alert('Error calculating numerology. Please check your date format.');
        console.error(error);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ---- Login Button (placeholder functionality) ----
    const loginBtn = document.getElementById('login-btn');
    
    loginBtn.addEventListener('click', () => {
        alert('Login functionality would be implemented here. This is just a demo.');
    });
});
