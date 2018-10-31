import React, { Component } from 'react';
import Nav from './components/Nav';
import Card from "./components/Cards/";
import Wrapper from "./components/Wrapper/";
import cards from "./cards.json"
import './App.css';

class App extends Component {

   state = {
     cards:cards,
     score: 0,
     best: 0,
     clicked: [],
     
    };

    handleIncrement = (id) => {
      // if card is in "clicked" array
      //   then game is over
      // else
      //    increment score
      //    add key of clicked card into "clicked" array
      console.log(id)


      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

      shuffle(this.state.cards)


      if(this.state.clicked.includes(id)){
        alert("Games Over")
        this.setState({ score: 0, clicked:[]})
      } else {
        this.setState({ score: this.state.score + 1})

        this.state.clicked.push(id)
        this.setState({ clicked:this.state.clicked })
        
        if(this.state.score >= this.state.best){
          this.setState({best:this.state.best + 1 })
        }
      }

      
   }
   
  render() {
    return (
      <div className="container">
        <Nav 
          score={this.state.score}
          best={this.state.best}
          />
      {this.state.cards.map(toon => (
          <Card
            id={toon.id}
            key={toon.id}
            name={toon.name}
            image={toon.image}
            clicked={this.state.clicked}
            handleIncrement={this.handleIncrement}            
          />
        ))}
      </div>
    );
  }
}

export default App;
