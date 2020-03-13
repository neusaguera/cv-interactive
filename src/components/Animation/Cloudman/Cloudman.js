import React from "react";
import Cloudmansvg from './images/cloudman.svg';
import VisibilitySensor from 'react-visibility-sensor';
import './Cloudman.scss';



class Cloudman extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            class: "cloudman"
        }
        this.onChange = this.onChange.bind(this);
    }
    
    onChange (isVisible) {
        if(isVisible){
            this.setState({
                class: "cloudman visible"
            })
        } else {
            this.setState({
                class: "cloudman"
            })
        }
    }
    
    render(){
        return (
            <div className={this.state.class}>
                <VisibilitySensor onChange={this.onChange}>
                    <img src={Cloudmansvg}  alt="Cloudman" id="cloudman" />       
                </VisibilitySensor>
            </div>
        );
    }
};

export default Cloudman;