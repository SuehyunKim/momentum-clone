const quotes = [
    {
        quote: "You still have enough time to make your dream come true",
        author: "Peter Pan",
    },
    {
        quote: "Sometimes the right path is not the easiest one",
        author: "Pocahontas",
    },
    {
        quote: "Some people are worth melting for",
        author: "Frozen 2",
    },
    {
        quote: "If you don’t know where you want to go, then it doesn’t matter which path you take",
        author: "Alice in the wonderland",
    },
    {
        quote: "You cannot be happy everyday, but there are happy things everyday",
        author: "Winnie the Pooh",
    },
    {
        quote: "All it takes faith and trust",
        author: "Peter Pan",
    },
    {
        quote: "I doesn’t matter what other people think. It matters what I think of myself",
        author: "The Little Mermaid",
    },
    {
        quote: "First, think. Second, believe. Third, dream. And finally, dare",
        author: "Walt Disney",
    },
    {
        quote: "All our dreams can come true, if we have the courage to pursue them",
        author: "Walt Disney",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;