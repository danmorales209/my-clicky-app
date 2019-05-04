import React from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Container from "./components/Container";
import Row from "./components/Row";
import Card from "./components/Card";
import './App.css';
import Images from "./components/img.json"


class App extends React.Component {

  state = {
    imgArray: Images,
    guessedArray: [],
    correct: 0,
    highScore: 0

  };

  handleHover = (e) => {
    e.preventDefault();

  }

  handleClick = (e) => {
    e.preventDefault();

    let index = e.target.attributes.index.value;

    if (!this.state.guessedArray.includes(index)) {

      if (this.state.correct === this.state.highScore) {
        this.setState(
          {
            correct: this.state.correct + 1,
            highScore: this.state.highScore + 1,
            guessedArray: [...this.state.guessedArray, index],
            imgArray: this.shuffle(this.state.imgArray)
          }
        )
      }
      else {
        this.setState(
          {
            correct: this.state.correct + 1,
            guessedArray: [...this.state.guessedArray, index],
            imgArray: this.shuffle(this.state.imgArray)
          }
        )
      }
    }
    else {
      this.setState({
        correct : 0,
        guessedArray : [],
        imgArray: this.shuffle(this.state.imgArray)
      })
    }
  }

  shuffle(array) {
    let newArray = array;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }


  render() {

    return (
      <>
        <Nav
          highScore={this.state.highScore}
          currentScore={this.state.correct}
        />
        <Header />
        <Container>
          <Row>
            {this.state.imgArray.map(x =>
              <Card
                index={x.id}
                src={x.src}
                onClick={(e) => this.handleClick(e)}
                onMouseOver={(e) => this.handleHover(e)}
              />)
            }
          </Row>
        </Container>
      </>
    )
  };
};

export default App;
