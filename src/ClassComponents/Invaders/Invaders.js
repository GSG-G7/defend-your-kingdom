import React from "react";
// import AnimateInvaders from "./AnimateInvaders";
import "./Invaders.css";

const Invaders = ({ position }) => {
  const invaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="invaders-box">
      <div className="invaders" style={{ top: position }}>
        {invaders.map(invader => (
          <div className="invader" key={invader}></div>
        ))}
      </div>
    </div>
  );
};

export default Invaders;
