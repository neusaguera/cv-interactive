import React, { Component } from '../../../node_modules/react';
import './Counter.scss';

class Digit extends Component {
    render(){
        return (
            <span className="digit">{this.props.value}</span>
        );
    }
}

export default Digit;