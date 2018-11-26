
/*


App: Render main things: header, search, hogszone
    state of the hogs:
      array of hogs
      <array of hidden hogs>
      showUngreased
      sortBy

    - get HogDetails
    - filter out ungreased
    - sort by name, weight

HogsZone: holds the hogs

HogsSearch: Updates state in App w/ callbacks

Hog: Displays our hog obj, optionally HogDetails
  - showDetails
HogDetails: shoin' details

*/





import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogZone from './HogZone';
import HogSearch from './HogSearch';

class App extends Component {

  constructor() {
    super();
    this.state = {
      greased: false,
      sortBy: "name"
    };
  }

  filterGreased = () => {
    if (this.state.greased) {
      return hogs.filter(hog => {
        return hog.greased;
      });
    } else {
      return hogs;
    }
  }

  sortHogs = () => {
    let filtered = this.filterGreased();

    switch (this.state.sortBy) {
      case "name":
        return filtered.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
      case "weight":
        return filtered.sort((a, b) => {
          return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
        });
        break;
      default:
        return filtered;
        break;
    }
  };

  render() {
    return (
      <div className="App">
          < Nav />
          < HogSearch
            greased={this.state.greased}
            onChangeFilter={() => this.setState({greased: !this.state.greased})}
            sortBy={this.state.sortBy}
            onChangeSortBy={(newSortBy) => this.setState({sortBy: newSortBy})}
          />
          < HogZone hogs={this.sortHogs()}/>
      </div>
    )
  }
}

export default App;
