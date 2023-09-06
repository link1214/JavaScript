/**
 * quotes.js
 */
const quotes = [
    {
      quote: "Now I am become Death, the destroyer of worlds.",
      author: " -J. Robert Oppenheimer-",
    },
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = "오늘의 명언";
author.innerText = "오늘의 작가";

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

