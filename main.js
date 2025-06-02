var quotes = [
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "So many books, so little time.", author: "Frank Zappa" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", author: "Albert Einstein" },
    { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" }
];

var quoteShown = [];

function getRandomQuote() {
    
    if (quoteShown.length === quotes.length) {
        quoteShown = [];
    }

    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quoteShown.includes(randomIndex));

    quoteShown.push(randomIndex);
    return quotes[randomIndex];
}

function displayQuote() {
    var quote = getRandomQuote();
    var quoteContext = document.getElementById("quote");
    var quoteAuthor = document.getElementById("author");

    quoteContext.innerHTML = "' " + quote.quote + " '";
    quoteAuthor.innerHTML = "Said by " + quote.author;
}
