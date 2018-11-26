import React from 'react';

import HogDetail from './HogDetail'


export default class Hog extends React.Component {

  state = {details: false};

  renderImage = () => {
    const name = this.props.hog.name.split(" ").join("_").toLowerCase();
    return require(`../hog-imgs/${name}.jpg`);
  };

  handleClick = (event) => {
    this.setState({details: !this.state.details});
  };

  render() {
    return (
      <div className="ui eight wide column">
        <div className="card" onClick={this.handleClick}>
          <div className="image">
            <img src={this.renderImage()} alt={this.props.hog.name}/>
          </div>
          <div className="content">
            <a className='header'> {this.props.hog.name} {this.props.hog.greased ? <i className="eye dropper icon"></i> : null}</a>
            {this.state.details ? <HogDetail hog={this.props.hog} /> : null}
          </div>
        </div>
      </div>);
  }

}
