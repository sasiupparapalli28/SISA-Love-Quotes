const quotes = [
    "Life is the flower for which love is the honey.",
    "Love has nothing to do with what you are expecting to get, only with what you are expecting to give.",
    "The love we give away is the only love we keep.",
    "Tell me whom you love and I will tell you who you are.",
    "Trust your intuition and be guided by love.",
    "If I had to choose between breathing or loving you, I would say 'I love you' with my last breath",
    "If you find someone you love in your life, then hang on to that love.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "We are most alive when we are in love.",
    "The only thing we never get enough of is love; and the only thing we never give enough of is love.",
    "There is only one happiness in this life, to love and be loved."
];

const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generate-btn');

generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
