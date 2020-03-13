import React, { Component } from 'react';
import './Url.scss';

class Url extends Component {
    render(){
        return (
            <a href={this.props.value} className="link">
                {this.props.value}
            </a>
        );
    }
}

export default Url;
