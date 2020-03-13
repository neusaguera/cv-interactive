import React, { Component } from '../../../node_modules/react';
import './Counter.scss';
import Digit from './Digit';


class Counter extends Component {
    render(){
        return (
            <div className="counter">
                <span className="counter-title">Your Points</span>
                <div className="counter-points">
                   <Digit value={this.props.digitOne} />
                   <Digit value={this.props.digitTwo} />
                   <Digit value={this.props.digitThree} />
                </div>
                
            </div>
        );
    }
}

export default Counter;