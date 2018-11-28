import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About from './About'
import {Route, Link, Switch} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: ''
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        paintingsList: json
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <Switch>
          <Route path='/paintings/:id' render={(props) => {
            let paintingId = props.match.params.id
            let painting = this.state.paintingsList.find(p => p.id === paintingId)
            return <PaintingDetails painting={painting}/>
          }} />
          <Route path='/paintings' render={()=><PaintingsList
              onSearchHandler={this.onSearchHandler}
              filterTerm={this.state.searchTerm}
              paintings={this.state.paintingsList}
            />
          }/>
          <Route path='/' component={About} />
        </Switch>
      </div>
    );
  }
}

/*
<About />






<PaintingsList
  onSearchHandler={this.onSearchHandler}
  filterTerm={this.state.searchTerm}
  paintings={this.state.paintingsList}
  onSelectPainting={this.onSelectPainting}
/>
*/

export default App;
