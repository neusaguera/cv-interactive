import React, { Component } from 'react';
import './TextPage.scss';

class Text extends Component {
    render(){
        return (
            <p className="text-page">
                {this.props.value}
            </p>
        );
    }
}

export default Text;
