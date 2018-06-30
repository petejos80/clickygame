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

import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

const App = () => (
  <Wrapper>
    <h1 className="title">Cards List</h1>
    <ImageCard
      image={cards[0].image}
    />
    <ImageCard
      image={cards[1].image}
    />
    <ImageCard
      image={cards[2].image}
    />
  </Wrapper>
);

export default App;

