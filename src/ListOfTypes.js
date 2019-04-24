import React from 'react';
import restaurants from './restaurants';

class ListOfTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type
        }
    }

    render() {
        return (
            <ul>
                {
                Object.keys(restaurants).map((types, i)=>(
                    <li key={i}><button onClick={
                        this.state.type
                    } value={types}>{types}</button></li>
                ))
                }
            </ul>
        )
    }
}



export default ListOfTypes;