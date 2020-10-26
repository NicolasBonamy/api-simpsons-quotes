import React from 'react';
import './App.css';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';

const sampleQuote = {
  quote: "I used to be with it. But then they changed what it was. Now what I'm with isn't it, and what's it seems scary and wierd. It'll happen to you.",
  character: "Abe Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
      console.log(data);
      this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote quote={this.state.quote} />
        <div className="Button">
          <button type="button" onClick={this.getQuote}>Get quote</button>
        </div>
      </div>
    );
  }
}

export default App;
