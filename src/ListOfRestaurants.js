import React from 'react';
import restaurants from './restaurants';

class ListOfRestaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ul>
              { restaurants[this.state.type] ?
                Object.keys(restaurants[this.state.type]).map((res, i) => {
                  return <li key={i}><button onClick={this._setRestaurant} value={res}>{res}</button></li>
                }) : "Click to view restaurants"
              }
            </ul>
        )
    }
    _setRestaurantType = (e) => {
        console.log(e.target.value);
        this.setState({
          type: e.target.value
        })
      }

}


export default ListOfRestaurants;