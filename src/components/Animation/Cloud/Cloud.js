import React from "react";
import Cloudsvg from './images/cloud.svg';
import './Cloud.scss';

class Cloud extends React.Component {
    render(){
        return (
           <img className="cloud" src={Cloudsvg} alt="Cloud" />       
        );
    }
};

export default Cloud;