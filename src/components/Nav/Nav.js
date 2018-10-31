import React from 'react';
import "./Nav.css";

const Nav = props => 
  <div className="row">
  <div className="col-sm-4">
    <h3 className="title"><a href="home">Dont Forget</a></h3>
  </div>  
  <div className="col-sm-4">  
    <p className="score">Score: {props.score}| Top score: {props.best}</p>
  </div>
  </div>
  
  


export default Nav