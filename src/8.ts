async function getRandomQuote() {
  const quotes = [
    "Be yourself; everyone else is already taken",
    "Don't cry because it's over, smile because it happened",
    "The only way to do great work is to love what you do",
    "Believe you can and you're halfway there",
    "You miss 100% of the shots you don't take"
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}
