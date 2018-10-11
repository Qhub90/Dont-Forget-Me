import React from "react";
import "./Card.css";

const Card = props => (
  <div className="game-cards">
    <div className="img-container">
      <img className=" "alt={props.name} src={props.image} />
    </div>        
  </div> 
);

export default Card;