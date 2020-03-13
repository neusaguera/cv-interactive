import React from 'react';
import './InputName.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disabled: false }
  }
  
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.setState({
        disabled: !this.state.disabled
      });
      var anchor = document.getElementById("PresentationSection");
      anchor.scrollIntoView({block: 'end'});
      }
  }

  render() {
    return (
      <form onSubmit={e => { e.preventDefault(); }} >
          <input autoFocus
            className="inputName" 
            type="text" 
            onChange={this.props.onChange} 
            onKeyPress={this.handleKeyPress} 
            placeholder="Anonymous" 
            disabled = {(this.state.disabled)? "disabled" : ""}/>
      </form>
    );
  }
}
  
export default Input;