import React, { Component } from '../../../node_modules/react';

import Title from '../TitlePage/TitlePage';
import Subtitle from '../Subtitle/Subtitle';
import Text from '../TextPage/TextPage';
import Url from '../Url/Url';
import Skater from '../../components/Animation/Skater/Skater';
import Cloud from '../../components/Animation/Cloud/Cloud';
import DirectionButton from '../DirectionButton/DirectionButton';

import './StepProjects.scss'; 
class StepProjects extends Component {
    render(){        
        if(this.props.logos){
            var logos = this.props.logos.map((logo) => 
                <li class="project-logo"><img src={logo} key={logo} alt={logo} /> </li>
            )
        } 
        return (
            <div style={this.props.class} className=" wrapper step-project">
                <Subtitle value={this.props.subtitle} />
                <Text value={this.props.summary} /> 
                <Url value={this.props.link} />
                <h3>Techs:</h3>
                <ul className="project-list-logos">
                    {logos}
                </ul>
                {this.props.directionUp ? <DirectionButton value="up" /> : null}
                {this.props.directionDown ? <DirectionButton value="bottom" /> : null}
                <Skater />
                <Cloud />
                <div class="project-footer">{this.props.footer}</div>
            </div>
        );
    }
}

export default StepProjects;    