import React from "react";
import "./Player.css";

export default class Player extends React.Component {
  state = {
    shoot: false,
    firePosition: 30,
    playerPosition: 0
  };

  shootFire = () => {
    this.setState({ shoot: true });
  };

  handleKeyPress = event => {
    if (event.code === "Space") this.setState({ shoot: true });
  };

  handlePlayerMove = event => {
    let pos = "";
    if (event.code === "ArrowRight") {
      pos = this.state.playerPosition + 2;
    } else if (event.code === "ArrowLeft") {
      pos = this.state.playerPosition - 2;
    } else {
      pos = this.state.playerPosition;
    }

    this.setState({ playerPosition: pos });
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
    window.addEventListener("keydown", this.handlePlayerMove);
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      if (prevState.firePosition === 500) {
        return;
      } else {
        this.setState({ firePosition: prevState.firePosition + 10 });
      }
    }, 10);
  }

  render() {
    const { firePosition } = this.state;
    return (
      <div className="player-space" ref="playerSpace">
        <div onClick={this.shootFire} className="player" style={{ left: `${this.state.playerPosition}%` }}></div>
        {this.state.shoot ? <div className="buttom-fire" style={{ bottom: firePosition }}></div> : null}
      </div>
    );
  }
}
