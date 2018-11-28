import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      eaten: [],
      budget: 50,
      counter: 0
    }
  }
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data =>
      this.setState({sushis:data})
    )
  }

  handleDisplaySushi = () => {
    return this.state.sushis.slice(this.state.counter, this.state.counter+4)
  }

  increaseCounter = () =>{
    this.setState({counter: this.state.counter +4})
  }

  handleEaten = (sushi) =>{
    if(this.state.budget>= sushi.price){
      this.setState({eaten: [...this.state.eaten, sushi], budget: this.state.budget - sushi.price})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  handleDisplaySushi={this.handleDisplaySushi()} increaseCounter={this.increaseCounter} handleEaten={this.handleEaten} eaten={this.state.eaten}/>
        <Table budget={this.state.budget} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
