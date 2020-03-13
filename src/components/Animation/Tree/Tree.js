import React from "react";
import Treesvg from './images/tree.svg';
import VisibilitySensor from 'react-visibility-sensor';
import './Tree.scss';

class Tree extends React.Component {
    render(){
        return (
            <VisibilitySensor >        
                <img className="tree" src={Treesvg} alt="Tree" />       
            </VisibilitySensor>
        );
    }
};

export default Tree;