import React, { Component } from "react";
import Header from "./ClassComponents/Header/Header";
import Invaders from "./ClassComponents/Invaders/Invaders";
import Player from "./ClassComponents/Player/Player";
import "./App.css";

class App extends Component {
  state = {
    // position: 0
    // firePosition: 30
  };

  // componentDidMount() {
  //   const { position, firePosition } = this.state;
  //   this.setState({ position });
  //   this.setState({ firePosition });
  // }

  componentDidUpdate(prevProps, prevState) {
    // setTimeout(() => {
    //   if (prevState.position === 400) {
    //     return;
    //   } else {
    //     this.setState({ position: prevState.position + 1 });
    //   }
    // }, 10);
    // setTimeout(() => {
    //   if (prevState.firePosition === 200) {
    //     return;
    //   } else {
    //     this.setState({ firePosition: ++prevState.firePosition });
    //   }
    // }, 10);
  }

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
