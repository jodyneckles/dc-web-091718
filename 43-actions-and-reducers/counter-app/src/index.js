import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

//reducer is a function that takes in oldState and an action and returns a newState
//initalState should be {count: 0}
const reducer = (oldState={count: 0}, action) => {
  console.log("oldState:" , oldState, "action:", action)
  switch(action.type){
    case INCREMENT:
      return {count: oldState.count + action.value}
    case DECREMENT:
      return {count: oldState.count - action.value}
    default:
      return oldState
  }
}
//++oldState.count IS BAD....

const store = createStore(reducer)

console.log('store created:', store.getState())

class App extends Component {

  //hack solution. Not a best practice...
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{`The current count is less than ${store.getState().count + (5 - (store.getState().count % 5))}`}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  increment = (value) => {
    store.dispatch({type: INCREMENT, value: value})
  };

  decrement = (value) => {
    store.dispatch({type: DECREMENT, value: value})
  };

  render() {
    return (
      <div className="Counter">
      <h1>{store.getState().count}</h1>
        <button onClick={() => {this.decrement(5)}}> -5 </button>
        <button onClick={() => {this.decrement(1)}}> - </button>
        <button onClick={() => {this.increment(1)}}> + </button>
        <button onClick={() => {this.increment(3)}}> +3 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
