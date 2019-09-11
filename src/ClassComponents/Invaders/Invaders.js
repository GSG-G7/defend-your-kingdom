import React from "react";
// import AnimateInvaders from "./AnimateInvaders";
import "./Invaders.css";

const Invaders = ({ position }) => {
  const invaders = new Array(50).fill("");

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
