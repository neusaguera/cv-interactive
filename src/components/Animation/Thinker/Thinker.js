import React from "react";
import Thinkersvg from './images/thinker.svg';
import VisibilitySensor from 'react-visibility-sensor';
import './Thinker.scss';

class Thinker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            class: "thinker"
        }
        this.onChange = this.onChange.bind(this);
    }
    
    onChange (isVisible) {
        if(isVisible){
            this.setState({
                class: "thinker visible"
            }) 
        } else {
            this.setState({
                class: "thinker"
            })
        }
    }
    render(){
        return (
            <VisibilitySensor onChange={this.onChange} >        
                <img className={this.state.class} src={Thinkersvg} alt="Thinker" />       
            </VisibilitySensor>
        );
    }
};

export default Thinker;