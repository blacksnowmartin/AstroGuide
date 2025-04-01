// DOM Elements
const zodiacSelect = document.getElementById('zodiac-select');
const horoscopeText = document.getElementById('horoscope-text');
const selectedSign = document.getElementById('selected-sign');
const refreshButton = document.getElementById('refresh-horoscope');
const tipText = document.getElementById('tip-text');

// Sample horoscope data (in real app, this would come from an API)
const horoscopes = {
    aries: [
        "Today is perfect for starting new projects. Your energy is high and success is likely.",
        "Focus on self-care today. Your ruling planet Mars brings intensity to personal matters.",
        "An unexpected opportunity may arise. Stay alert and ready to take action."
    ],
    taurus: [
        "Financial opportunities are highlighted today. Trust your instincts with money matters.",
        "Your creative energy is strong. Express yourself through art or music.",
        "A peaceful day ahead. Focus on comfort and enjoying life's simple pleasures."
    ],
    gemini: [
        "Communication is enhanced today. Share your ideas with confidence.",
        "Your curiosity leads to valuable discoveries. Follow your interests.",
        "Social connections bring joy today. Reach out to friends and family."
    ]
    // Add more signs and horoscopes
};

// Daily tips array
const dailyTips = [
    "Take a moment to meditate and align with the universe's energy.",
    "Your intuition is especially strong today - trust your inner voice.",
    "The stars suggest focusing on personal growth and development.",
    "Today is ideal for setting new intentions and goals.",
    "Practice gratitude to attract positive cosmic energy."
];

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayRandomTip();
    setupMobileMenu();
});

zodiacSelect.addEventListener('change', updateHoroscope);
refreshButton.addEventListener('click', updateHoroscope);

// Functions
function updateHoroscope() {
    const sign = zodiacSelect.value;
    if (!sign) return;

    selectedSign.textContent = `${sign.charAt(0).toUpperCase() + sign.slice(1)} Horoscope`;
    const randomIndex = Math.floor(Math.random() * horoscopes[sign].length);
    horoscopeText.textContent = horoscopes[sign][randomIndex];
}

function displayRandomTip() {
    const randomIndex = Math.floor(Math.random() * dailyTips.length);
    tipText.textContent = dailyTips[randomIndex];
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
} 