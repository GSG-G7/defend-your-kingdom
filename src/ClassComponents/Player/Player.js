import React from "react";
import "./Player.css";

export default class Player extends React.Component {
  state = {
    shoot: false
  };

  shootFire = () => {
    this.setState({ shoot: true });
  };

  render() {
    return (
      <div className="player-space">
        <div onClick={this.shootFire} className="player"></div>
        {this.state.shoot ? <div class="buttom-fire"></div> : null}
      </div>
    );
  }
}
