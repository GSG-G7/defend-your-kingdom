import React from "react";
import "./Player.css";

export default class Player extends React.Component {
  state = {
    shoot: false,
    firePosition: 30
  };

  shootFire = () => {
    this.setState({ shoot: true });
    console.log(22222222222222222);

    while (this.state.firePosition < 200) {
      console.log(222222222222);
      setTimeout(() => {
        // if (this.state.firePosition === 500) {
        //   console.log(22222222, "not");

        //   return;
        // } else {
        console.log(111111111111, "add");

        this.setState({ firePosition: this.state.firePosition + 1 });
        // }
      }, 10);
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   setTimeout(() => {
  //     if (this.state.firePosition === 500) {
  //       console.log(22222222, "not");

  //       return;
  //     } else {
  //       console.log(111111111111, "add");

  //       this.setState({ firePosition: this.state.firePosition + 1 });
  //     }
  //   }, 10);
  // }

  render() {
    const { firePosition } = this.state;
    return (
      <div className="player-space">
        <div onClick={this.shootFire} className="player"></div>
        {this.state.shoot ? <div className="buttom-fire" style={{ bottom: firePosition }}></div> : null}
      </div>
    );
  }
}
