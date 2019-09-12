import React, { Component } from "react";
import Header from "./ClassComponents/Header/Header";
import Invaders from "./ClassComponents/Invaders/Invaders";
import Player from "./ClassComponents/Player/Player";
import "./App.css";

class App extends Component {
  render() {
    // const { position, firePosition } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="game-body">
          <Invaders />
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
