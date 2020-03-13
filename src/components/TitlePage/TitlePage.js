import React from 'react';
import './TitlePage.scss';

class Title extends React.Component {
    render(){
        return (
            <h1 className="title-page">
                {this.props.value}
            </h1>
        );
    }
}

export default Title;
