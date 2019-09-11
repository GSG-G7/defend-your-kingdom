import React, { Component } from "react";
import Header from "./ClassComponents/Header/Header";
import Invaders from "./ClassComponents/Invaders/Invaders";
import Player from "./ClassComponents/Player/Player";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Invaders />
        <Player />
      </div>
    );
  }
}

export default App;
