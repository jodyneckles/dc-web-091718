import React, {Component} from 'react'
import {connect} from 'react-redux'
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header" style={{color: this.props.color}}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{`The current count is less than ${this.props.countValue + (5 - (this.props.countValue % 5))}`}</h3>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  return {countValue: state.count}
}

export default connect(mapStateToProps)(Header)
