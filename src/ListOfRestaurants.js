import React from 'react';
import restaurants from './restaurants';

class ListOfRestaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            restaurant: props.res
        }
    }

    render() {
        return (
            <ul>
            { this.state.type ?
            Object.keys(restaurants[this.state.type]).map((res, i) => {
                return <li key={i}><button onClick={this.state.restaurant} value={res}>{res}</button></li>
            }) : "View restaurant"
            }
            </ul>
        )
    } 

}


export default ListOfRestaurants;