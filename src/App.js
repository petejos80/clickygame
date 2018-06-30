// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;




import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

  // Map over this.state.cards and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.cards.map(card => (
          <ImageCard
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
