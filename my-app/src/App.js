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

  componentDidMount() {

    console.log("Mounted")

    let scoreDisplay = document.querySelector("#score");
    let highScoreDisplay = document.querySelector("#highScore");
    let navBar = document.querySelector(".navbar");

    scoreDisplay.addEventListener("animationend", function () {
      let classes = this.classList;

      if (classes.contains("correct-guess")) {
        this.classList.remove("correct-guess");
      }
      else if (classes.contains("incorrect-guess")) {
        this.classList.remove("incorrect-guess");
      }
    });

    highScoreDisplay.addEventListener("animationend", function () {
      let classes = this.classList;

      if (classes.contains("correct-guess")) {
        this.classList.remove("correct-guess");
      }
      else if (classes.contains("incorrect-guess")) {
        this.classList.remove("incorrect-guess");
      }
    });

    navBar.addEventListener("animationend", function() {
      
      if ( this.classList.contains("nav-incorrect-guess") ) {
        this.classList.toggle("nav-incorrect-guess");
      }
    })



  }

  handleClick = (e) => {
    e.preventDefault();

    let index = e.target.attributes.index.value;
    let scoreDisplay = document.querySelector("#score");
    let highScoreDisplay = document.querySelector("#highScore");
    let navBar = document.querySelector(".navbar");

    if (!this.state.guessedArray.includes(index)) {

      if (this.state.correct === this.state.highScore) {
        this.setState(
          {
            correct: this.state.correct + 1,
            highScore: this.state.highScore + 1,
            guessedArray: [...this.state.guessedArray, index],
            imgArray: this.shuffle(this.state.imgArray)
          }
        );
        
        scoreDisplay.classList.add("correct-guess");
        highScoreDisplay.classList.add("correct-guess");

      }
      else {
        this.setState(
          {
            correct: this.state.correct + 1,
            guessedArray: [...this.state.guessedArray, index],
            imgArray: this.shuffle(this.state.imgArray)
          }
        );

        scoreDisplay.classList.add("correct-guess");
      }
    }
    else {
      this.setState({
        correct: 0,
        guessedArray: [],
        imgArray: this.shuffle(this.state.imgArray)
      });

      scoreDisplay.classList.add("incorrect-guess");
      highScoreDisplay.classList.add("incorrect-guess");
      navBar.classList.toggle("nav-incorrect-guess");

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
        <Header />
        <Nav
          highScore={this.state.highScore}
          currentScore={this.state.correct}
        />
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
