const quotes = [
    "Believe in yourself and all that you are.",
    "Push yourself, because no one else is going to do it for you.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Great things never come from comfort zones.",
    "Don't watch the clock; do what it does. Keep going.",
    "You are capable of amazing things.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Success doesn't just find you. You have to go out and get it.",
    "Dream it. Wish it. Do it.",
    "Sometimes later becomes never. Do it now."
  ];
  
  function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
  
    quoteElement.style.opacity = 0;
    setTimeout(() => {
      quoteElement.textContent = quotes[randomIndex];
      quoteElement.style.opacity = 1;
    }, 300);
  }
  
  window.onload = showQuote;
  
