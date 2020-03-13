import React from 'react';
import Title from "../TitlePage/TitlePage";
import DirectionButton from '../../components/DirectionButton/DirectionButton';
import Cloud from '../../components/Animation/Cloud/Cloud';
import Thinker from '../../components/Animation/Thinker/Thinker';
import Card from '../../components/Card/Card';

import './Choose.scss';

class Choose extends React.Component{

  render(){
   const typeCard = ["clover", "diamond", "spades", "heart"];

   const cards = typeCard.map((card) => 
    <Card value={card} displaySection={this.props.displaySection} key={card}/>
   );

    var allClasses = this.props.class + " wrapper component";

    return (
      <div className={allClasses} >
        <Title value="What do you want to know about me?" />
        <div className="cards-wrapper">
          {cards}
        </div>
        <DirectionButton value="up" />
        <Cloud />
        <Thinker />
      </div>
    );
  }
}

export default Choose;
