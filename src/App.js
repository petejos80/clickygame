import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

topScore = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log(this.state.highscore);
    });
  }
}

clickHandler= (id) => {
  console.log("Clickhandler", id)
  console.log(this.state.cards)

  // Check if to see if card has already been clicked
  const card = this.state.cards.find(card => card.id === id)
  if (card.clicked) {
    this.setState({cards: this.state.cards.map(card => card.id === id ? ({...card, clicked: false}) : card)}, this.incorrectGuess)
  } else {
    this.setState({cards: this.state.cards.map(card => card.id === id ? ({...card, clicked: true}) : card)}, this.correctGuess)
  }
}

  correctGuess = () => {
    // Correct guess function
    this.setState({
      cards: this.shuffleData(this.state.cards),
      score: this.state.score + 1,
    },

  console.log(this.state.score))
    // Set state to increment score and reshuffle cards
  }

  incorrectGuess = () => {
    // Incorrect guess function
    this.setState({
      cards: this.shuffleData(this.state.cards).map(card => ({...card, clicked: false})),
      score: 0,
    },() => alert("You Lose! Try again to beat your high score!")
  )
  this.topScore()
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
      <div>
        <div>
        <Navbar
          score={this.state.score}
          highscore={this.state.highscore}
        />
        </div>
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
      </div>
    );
  }
}

export default App;


