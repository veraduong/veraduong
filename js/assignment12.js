const endpoint = 'https://api.quotable.io/random';
// const endpoint = 'https://catfact.ninja/fact'

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

async function getQuote() {
    console.log("quote button was clicked");
    try {
        const response = await fetch(endpoint);
        if (!response.ok) { // NOT ok
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json); 
        // displayQuote(json.fact);
        displayQuote(json.content);
        displayA(json.author);

        const tweetButton=document.getElementById("tweet");
        tweetButton.href="https://twitter.com/intent/tweet?text="+json.content+" ~ "+json.author;
    }

    catch(err) {
        console.log(err);
        alert('Failed');
    }

}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote; 
}

function displayA(auth) {
    const quoteA = document.querySelector('#js-quote-auth');
    quoteA.textContent = "—" + auth; 
}



