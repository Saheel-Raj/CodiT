const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function urlquote(url){
    const response = await fetch(url);
    var data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

urlquote(api_url);