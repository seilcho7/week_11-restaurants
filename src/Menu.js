import React from 'react';
import restaurants from './restaurants';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: props.restaurant
        }
    }

    render() {
        return (
            <ul>
                {restaurants["american"][this.state.menu].map((m) => {
                    return <li>{m}</li>;
                })}
            </ul>
        )
    } 

}


export default Menu;