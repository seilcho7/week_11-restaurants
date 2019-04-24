import React from 'react';
import logo from './logo.svg';
import './App.css';

import restaurants from './restaurants';
import ListOfTypes from './ListOfTypes';
import ListOfRestaurants from './ListOfRestaurants';
import Menu from './Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      restaurant: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
            {
            Object.keys(restaurants).map((types, i)=>(
                <li key={i}><button onClick={
                    this._reset
                } value={types}>{types}</button></li>
            ))
            }
            </ul>
          <ul>
              { restaurants[this.state.type] ?
                Object.keys(restaurants[this.state.type]).map((res, i) => {
                  return <li key={i}><button onClick={this._setRestaurant} value={res}>{res}</button></li>
                }) : "Click to view restaurants"
              }
            </ul>
          <ul>
              { restaurants[this.state.type] && restaurants[this.state.type][this.state.restaurant] ?
                restaurants[this.state.type][this.state.restaurant].map((m, i) => {
                    return <li key={i}><button>{m}</button></li>
                }) : "Menu"
              }
          </ul>
        </header>
      </div>
    );
  }

  _setRestaurantType = (e) => {
    console.log(e.target.value);
    this.setState({
      type: e.target.value
    })
  }

  _setRestaurant = (e) => {
    console.log(e.target.value);
    this.setState({
      restaurant: e.target.value
    })
  }

  _reset = (e) => {
    this.setState({
      type: e.target.value,
      restaurant: ''
    })
  }

}

export default App;
