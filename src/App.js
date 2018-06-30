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
