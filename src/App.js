import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0
  };

clickHandler= (id) => {
  console.log("Clickhandler", id)
  const newCards = [...this.state.cards]
  // Check if to see if card has already been clicked
  newCards.forEach(card => {
    if (card.id === id){
      if (card.clicked) {
        // If already clicked, restart game and reshuffle images
        card.clicked = false;
        this.incorrectGuess (newCards)
      } else {
        // If not clicked, set clicked value to true, then reshuffle images, incremement score 
        card.clicked = true;
        this.correctGuess (newCards)
      }
    }
  }
  )
  // If already clicked, restart game and reshuffle images
  // If not clicked, set clicked value to true, then reshuffle images, incremement score 
}

  correctGuess = (newCards) => {
    // Correct guess function
    this.setState({
      cards: this.shuffleData(newCards),
      score: this.state.score + 1
    },
  console.log(this.state.score))
    // Set state to increment score and reshuffle cards
  }

  incorrectGuess = (newCards) => {
    // Incorrect guess function
    this.setState({
      cards: this.shuffleData(newCards),
      score: 0
    },
  console.log(this.state.score))
    // Set state to 0 score and reshuffle cards
  }

    shuffleData = data => {
      let i = data.length - 1;
      while (i > 0) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
        i--;
      }
      return data;
    };

  // Map over this.state.cards and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.cards.map(card => (
          <ImageCard
            key={card.id}
            image={card.image}
            id={card.id}
            clicked={card.clicked}
            clicker={this.clickHandler}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
