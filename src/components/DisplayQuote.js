// src/components/DisplayEmployee.js
import React from 'react';
import './DisplayQuote.css';
  
function DisplayQuote({ quote }) {
  return (
    <figure class="DisplayQuote">
            <img src={quote.image} alt={quote.character} />
            <figcaption>
            <blockquote>
                {quote.quote}
            </blockquote>
            <cite>{quote.character}</cite>
            </figcaption>
        </figure>
  );
};

export default DisplayQuote;