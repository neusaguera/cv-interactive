import React, { Component } from 'react';
import './Subtitle.scss';

class Subtitle extends Component {
    render(){
        return (
            <h2 className="subtitle">
                {this.props.value}
            </h2>
        );
    }
}

export default Subtitle;
