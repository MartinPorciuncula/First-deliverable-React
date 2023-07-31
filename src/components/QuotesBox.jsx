import React from "react";
import "./Styles/QuotesBox.css";
const QuotesBox = ({ handleChangeQuote, quote }) => {
  return (
    <section className="quoteBox">
      <h1 className="text title">InfoGalak</h1>

      <section>
        <article className="container-art">
          <p className="text phrase">{quote.phrase}</p>
          <button className="btn " onClick={handleChangeQuote}></button> 
        </article>
        </section>
        <footer>
          <h4 className="text footer">Fuente: {quote.author}</h4>
        </footer>
    </section>
  );
};

export default QuotesBox;
