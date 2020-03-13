import React, { Component } from 'react';
import Cloversvg from './images/clover.svg';
import Diamondsvg from './images/diamond.svg';
import Spadessvg from './images/spades.svg';
import Heartsvg from './images/heart.svg';
import './Card.scss';

function CardOption(props) {
    const option = props.value;
    switch(option) {
        case "clover":
            return (
                <button className="card" id="project" onClick={props.handleDisplaySectionClick}>
                    <img src={Cloversvg} alt="Clover" />
                    <span> Projects </span>    
                </button>
            );
        case "diamond":
            return (
                <button className="card" id="experience" onClick={props.handleDisplaySectionClick}>
                    <img src={Diamondsvg} alt="Diamond" />
                    <span> Experience </span>    
                </button>
            );
        case "spades":
            return (
                <button className="card" id="study" onClick={props.handleDisplaySectionClick}>
                    <img src={Spadessvg} alt="Spades" />
                    <span> Studies </span>    
                </button>
            );
        default:
            return (
                <button className="card" id="personal" onClick={props.handleDisplaySectionClick}>
                    <img src={Heartsvg} alt="Heart" />
                    <span> Personal </span>    
                </button>
            );
    }
}

class Card extends Component {
    render(){
        return (
            <CardOption value={this.props.value} handleDisplaySectionClick={this.props.displaySection} />
        );
    }
}

export default Card;