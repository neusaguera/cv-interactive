import React from 'react';
import Title from "../TitlePage/TitlePage";
import DirectionButton from '../DirectionButton/DirectionButton';
import Text from '../TextPage/TextPage';
import Cloudman from '../Animation/Cloudman/Cloudman';

import './Presentation.scss';

class Presentation extends React.Component {
  render() {
    const textTile = "Hey " + this.props.name + "!";
    
    return (
      <div className="wrapper hello component second-component" id="PresentationSection">
        <Title value={textTile} />
        <Text value="I’m Neus, I’m front-end I code many
                    Javascript but I love HTML and
                    CSS (the most hate code), 
                    in Spanish call me PINTA y COLOREA. 
                    Sometimes I also design sites like this."           
        />
        <DirectionButton value="bottom" />
        <DirectionButton value="up" />
        <Cloudman />
      </div>
    );
  }
  }

export default Presentation;
