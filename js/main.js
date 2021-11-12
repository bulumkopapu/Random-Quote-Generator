const quote = document.getElementById("title");
const author = document.getElementById("paragraph");

async function fetchQuote(){
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log(data);
    
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

  }

  
  
  