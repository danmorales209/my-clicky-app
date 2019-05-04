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
    correct: 0,
    highScore: 0
    
  };

  handleHover = (e) => {
    e.preventDefault();

    let myCard = e.target;

  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ imgArray: this.shuffle(this.state.imgArray) })
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
        <Nav />
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
