import React from "react";
import "./Invaders.css";

const Invaders = () => {
  const invaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="invaders-box">
      <div className="invaders">
        {invaders.map(invader => (
          <div className="invader" key={invader}></div>
        ))}
      </div>
    </div>
  );
};

export default Invaders;
