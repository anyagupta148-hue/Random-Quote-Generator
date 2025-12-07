const quotes = [
  "Believe in yourself.",
  "Stay positive.",
  "Work hard, dream big.",
  "Never give up.",
  "Be kind to yourself."
];

function showQuote(){
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}
