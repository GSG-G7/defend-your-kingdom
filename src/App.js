import React, { Component } from "react";
import Header from "./ClassComponents/Header/Header";
import Invaders from "./ClassComponents/Invaders/Invaders";
import Player from "./ClassComponents/Player/Player";
import "./App.css";

class App extends Component {
  state = {
    position: 0
  };

  componentDidMount() {
    const { position } = this.state;
    this.setState({ position });
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      if (prevState.position === 400) {
        return;
      } else {
        this.setState({ position: prevState.position + 1 });
      }
    }, 20);
  }

  render() {
    const { position } = this.state;
    return (
      <div className="App">
        <Header />
        <Invaders position={position} />
        <Player />
      </div>
    );
  }
}

export default App;
