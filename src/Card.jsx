import React from 'react'
import './index.css'

const Card = ({ card, onClick, flipped, disabled }) => {
    return (
      <div className="card" onClick={() => (!disabled ? onClick(card) : null)}>
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.image} alt="card front" />
          <div className="back"></div>
        </div>
      </div>
    );
  };
  
  export default Card;