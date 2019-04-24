import React from 'react';
import restaurants from './restaurants';

class ListOfTypes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <ul>
            {
            Object.keys(restaurants).map((types, i)=>(
                <li key={i}><button onClick={
                    this._reset
                } value={types}>{types}</button></li>
            ))
            }
            </ul>
        )
    }
    _reset = (e) => {
        this.setState({
          type: e.target.value,
          restaurant: ''
        })
      }
}



export default ListOfTypes;