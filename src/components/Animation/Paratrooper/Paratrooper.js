import React from "react";
import ParatrooperSvg from './images/paratrooper.svg';
import VisibilitySensor from 'react-visibility-sensor';
import './Paratrooper.scss';

class Paratrooper extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            class: "paratrooper"
        }
        this.onChange = this.onChange.bind(this);
    }
    
    onChange (isVisible) {
        if(isVisible){
            this.setState({
                class: "paratrooper visible"
            }) 
        } else {
            this.setState({
                class: "paratrooper"
            })
        }
    }
    render(){
        return (
            <VisibilitySensor onChange={this.onChange}>     
                <img className={this.state.class} src={ParatrooperSvg} alt="Paratrooper" />       
            </VisibilitySensor>
        );
    }
};

export default Paratrooper;