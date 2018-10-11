import React, { Component } from 'react';
import Card from "./components/Cards/";
import Wrapper from "./components/Wrapper/";
import cards from "./cards.json"
import './App.css';

class App extends Component {

   state = {
     cards:cards,
     count:0
   };
   
  render() {
    return (
      <Wrapper>
      {this.state.cards.map(friend => (
          <Card
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
