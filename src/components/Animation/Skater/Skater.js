import React from "react";
import Skatersvg from './images/skater.svg';
import VisibilitySensor from 'react-visibility-sensor';
import './Skater.scss';

class Skater extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            class: "skater"
        }
        this.onChange = this.onChange.bind(this);
    }
    
    onChange (isVisible) {
        if(isVisible){
            this.setState({
                class: "skater-wrapper visible"
            }) 
        } else {
            this.setState({
                class: "skater-wrapper"
            })
        }
    }
    render(){
        return (
            <VisibilitySensor onChange={this.onChange} >   
                <div className={this.state.class}>
                    <img className="skater" src={Skatersvg} alt="skater" />       
                </div>     
            </VisibilitySensor>
        );
    }
};

export default Skater;