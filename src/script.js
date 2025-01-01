import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import { useState, useEffect } from 'https://esm.sh/react@18.2.0'
import axios, * as others from "https://cdn.skypack.dev/axios@1.3.4";

const colorsList = ["#b33939", "#3b6096", "#958b3e", "#6933a0", "#33a090", "#38a133", "#b8640e", "#b80f6e"]

function QuoteMachine () {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quotesList, setQuotesList] = useState();
  const [quotesListLength, setQuotesListLength] = useState();
  const [color, setColor] = useState("");
  
  useEffect(() => {
    getQuote()
  }, []) 
  
  function getQuote() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', {
      headers: {
        Accept: "application/json",
      }
    })
      .then(response => response.json())
      .then((data) => {
      let i = Math.floor(Math.random() * data.quotes.length)
      setQuote(data.quotes[i].quote)
      setAuthor(data.quotes[i].author)
    })
      .catch(error => {
      console.log("Error fetching data, " + error);
    })
    
    let j = Math.floor(Math.random() * colorsList.length)
    setColor(colorsList[j])
    console.log(colorsList[j])
  }
  
  function handleTweetButton () {
   window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quote + '" ' + author))
  }
  
  return (
    <div>
      <style> {`
          html {
            --main-color: ${color};
            }
          `}
      </style>
      <div id="quote-box">
        <div id="text">"{quote}"</div>
        <div id="author">- {author}</div>
        <div id="element-bar">
         <button><a id="tweet-quote" onClick={handleTweetButton} href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=">Tweet This!</a></button>
          <button id="new-quote" onClick={getQuote}>New Quote!</button>
         </div>
        </div>
      </div>
     );
}


ReactDOM.render(<QuoteMachine/>, document.getElementById('main'));
