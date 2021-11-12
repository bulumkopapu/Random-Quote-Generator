async function fetchQuote(){
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log(data);
    let quote = data.content;
    let author = data.author;

    console(quote);
  }
  
  fetchQuote();
  
  
  