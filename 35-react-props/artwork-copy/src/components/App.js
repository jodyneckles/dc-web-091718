import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import PaintingList from './PaintingList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header color="orange" title="Paintr" tagline="ControlAltDefeat Paintings!"/>
        <PaintingList />
      </div>
    );
  }
}

export default App;
