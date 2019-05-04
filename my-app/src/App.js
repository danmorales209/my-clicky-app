import React from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Container from "./components/Container";
import './App.css';

class App extends React.Component {


  state = {
    imgArray: []

  };

  componentDidMount = () => {
    this.setState({
      imgArray: new Array(12)
    })
  }


  render() {
    return (
      <>
        <Nav />
        <Header />
        <Container />
      </>
    )
  };
};

export default App;
