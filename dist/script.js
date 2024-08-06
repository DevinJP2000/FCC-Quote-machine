import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
import { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import axios, * as others from "https://cdn.skypack.dev/axios@1.3.4";

const colorsList = ["#b33939", "#3b6096", "#958b3e", "#6933a0", "#33a090", "#38a133", "#b8640e", "#b80f6e"];

function QuoteMachine() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quotesList, setQuotesList] = useState();
  const [quotesListLength, setQuotesListLength] = useState();
  const [color, setColor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', {
      headers: {
        Accept: "application/json" } }).


    then(response => response.json()).
    then(data => {
      let i = Math.floor(Math.random() * data.quotes.length);
      setQuote(data.quotes[i].quote);
      setAuthor(data.quotes[i].author);
    }).
    catch(error => {
      console.log("Error fetching data, " + error);
    });

    let j = Math.floor(Math.random() * colorsList.length);
    setColor(colorsList[j]);
    console.log(colorsList[j]);
  }

  function handleTweetButton() {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
    encodeURIComponent('"' + quote + '" ' + author));
  }

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("style", null, " ", `
          html {
            --main-color: ${color};
            }
          `), /*#__PURE__*/

    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("div", { id: "text" }, "\"", quote, "\""), /*#__PURE__*/
    React.createElement("div", { id: "author" }, "- ", author), /*#__PURE__*/
    React.createElement("div", { id: "element-bar" }, /*#__PURE__*/
    React.createElement("button", null, /*#__PURE__*/React.createElement("a", { id: "tweet-quote", onClick: handleTweetButton, href: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" }, "Tweet This!")), /*#__PURE__*/
    React.createElement("button", { id: "new-quote", onClick: getQuote }, "New Quote!")))));




}


ReactDOM.render( /*#__PURE__*/React.createElement(QuoteMachine, null), document.getElementById('main'));

// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.