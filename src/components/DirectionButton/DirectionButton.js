import React from 'react';
import './DirectionButton.scss';
import { Icon } from 'react-icons-kit';
import {arrows_down} from 'react-icons-kit/linea/arrows_down';
import {basic_magic_mouse} from 'react-icons-kit/linea/basic_magic_mouse';
import {arrows_up} from 'react-icons-kit/linea/arrows_up'

function Direction(props) {
  const direction = props.value;


  switch(direction) {
    case "bottom":
        return (
          <span className="direction-button bottom">
          <Icon className="icon-mouse" size="36" icon={basic_magic_mouse} />
          <Icon className="icon-arrow down" size="24" icon={arrows_down} />
        </span>
        );
    case "up":
        return (
          <span className="direction-button up" href="home">
            <Icon className="icon-arrow up" size="24" icon={arrows_up} />
            <Icon className="icon-mouse" size="36" icon={basic_magic_mouse} />
          </span>
        );
    default:
      return(null);
  }
}

class DirectionButton extends React.Component {
  render() {
      return (
        <Direction value={this.props.value} />
      );
    }
  }
  
export default DirectionButton;