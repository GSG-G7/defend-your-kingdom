import React from "react";
// import AnimateInvaders from "./AnimateInvaders";
import "./Invaders.css";

export default class Invaders extends React.Component {
  state = {
    position: 0
  };
  componentDidMount() {
    const { position, firePosition } = this.state;
    this.setState({ position });
    this.setState({ firePosition });
  }

  componentDidUpdate(prevProps, prevState) {
    setTimeout(() => {
      if (prevState.position === 400) {
        return;
      } else {
        this.setState({ position: prevState.position + 1 });
      }
    }, 10);
  }

  render() {
    const { position } = this.state;
    const invaders = Array.from(Array(15).keys());
    return (
      <div className="invaders-box">
        <div className="invaders" style={{ top: position }}>
          {invaders.map(invader => (
            <div className="invader" key={invader}></div>
          ))}
        </div>
      </div>
    );
  }
}

// const Invaders = ({ position }) => {
//   const invaders = Array.from(Array(15).keys());

// return (
//   <div className="invaders-box">
//     <div className="invaders" style={{ top: position }}>
//       {invaders.map(invader => (
//         <div className="invader" key={invader}></div>
//       ))}
//     </div>
//   </div>
// );
// };

// export default Invaders;
