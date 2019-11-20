import React, { Component } from "react";
import styled from "styled-components";
import UgKnuck from "./assets/ugandanKnuckles.jpeg";
import Toad from "./assets/tum.jpg";
import Luigi from "./assets/luigi.png";
import Bowser from "./assets/bowser.jpg";
import Mario from "./assets/mario-pose4.png";
import Card from "./cards/Card";
import Cards from "./cards/Cards";

let matchedSaved = [];
let unique;

class App extends Component {
  state = {
    message: "Click the cards to find all the pairs",
    picsArray: [
      Mario,
      UgKnuck,
      Bowser,
      UgKnuck,
      Luigi,
      Toad,
      Luigi,
      Toad,
      Bowser,
      UgKnuck,
      Luigi,
      Mario,
      Toad,
      UgKnuck,
      Toad,
      Luigi
    ],
    isFlipped: false,
    match: [],
    images: [],
    allFound: false
  };

  clickHandler = (id, image) => {
    let matchedArray = this.state.match;
    let imageCheck = this.state.images;
    matchedArray.push(id);
    imageCheck.push(image);

    matchedSaved.push(id);
    console.log(matchedSaved);
    this.setState({ match: matchedArray, images: imageCheck });

    console.log(this.state.match);
    console.log(this.state.images);
    if (
      this.state.images.length > 1 &&
      this.state.images[0] == this.state.images[1]
    ) {
      unique = [...new Set(matchedSaved)];
      if (unique.length == 16) {
        setTimeout(() => {
          this.setState({ allFound: true });
        }, 1000);
      }
      console.log("a match!");

      this.setState({ match: [], images: [] });
    } else if (
      this.state.images.length > 1 &&
      this.state.images[0] != this.state.images[1]
    ) {
      matchedSaved.pop();
      matchedSaved.pop();

      this.setState({ match: [], images: [] });
      setTimeout(() => {
        this.setState({ isFlipped: true });
      }, 250);
      setTimeout(() => {
        this.setState({ isFlipped: false });
      }, 500);
    }
  };

  resetButton = () => {
    matchedSaved = [];
    this.setState({ allFound: false });
  };

  render() {
    return (
      <Container>
        {this.state.allFound ? (
          <>
            <Win> Oh Shit, you did it.</Win>
            <button onClick={this.resetButton}>Go Again</button>
          </>
        ) : (
          <Container>
            <div>
              <h1>The Slightly Infuriating React Match Up Game</h1>
            </div>
            <div>
              <Cards
                pics={this.state.picsArray}
                click={this.clickHandler}
                flip={this.state.isFlipped}
              />
            </div>
            <h3>{this.state.message}</h3>
            <Warning>
              {" "}
              Beware though, if you make a mistake you'll have to start from the
              beginning
            </Warning>
          </Container>
        )}
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

const Warning = styled.h3`
  color: red;
`;

const Win = styled.h1``;
