import React from 'react';
import Title from "../../components/TitlePage/TitlePage";
import InputName from '../InputName/InputName';
import DirectionButton from '../../components/DirectionButton/DirectionButton';
import Paratrooper from '../../components/Animation/Paratrooper/Paratrooper';
import './Hello.scss';

class Hello extends React.Component{
  render(){
    return (
      <div className="wrapper hello component first-component" >
              <Paratrooper />
              <Title value="Hi! What is your name?" />
              <InputName onChange={this.props.handleChange} />
              <DirectionButton value="bottom"/>
      </div>
    );
  }
}

export default Hello;
