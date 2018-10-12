import React from "react";
import "./Card.css";

const Card = props => (
  <div className="game-cards col-sm-2">    
      <img 
        className="toon" 
        alt={props.name} 
        src={props.image} 
        onClick={() => props.handleIncrement(props.id)} />
  </div> 
);

export default Card;