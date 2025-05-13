const apiUrl = "http://cors-anywhere.com/https://zenquotes.io/api/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet");

async function getQuote() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		quote.innerHTML = data[0].q;
		author.innerHTML = data[0].a;
	} catch (error) {
		console.error("Error fetching quotes", error);
	}
}

getQuote();

function tweet() {
	window.open(
		"https://twitter.com/intent/tweet?text=" +
			quote.innerHTML +
			"----" +
			author.innerHTML,
		"Tweet Window",
		"width=600,height=300"
	);
}

newQuoteBtn.addEventListener("click", getQuote);
tweetBtn.addEventListener("click", tweet);
