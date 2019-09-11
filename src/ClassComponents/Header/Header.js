import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__score">
        <p className="score-num">Score: <span>0</span></p>
      </div>
      <div className="header__level">
        <h4 className="level-num">Level</h4>
        <p>1</p>
      </div>
      <div className="header__instructions">
        <button className="instructions">Instructions</button>  
      </div>
    </div>
  )
}
export default Header;