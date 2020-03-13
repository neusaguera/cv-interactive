import React from 'react';
import StepProjects from '../StepProjects/StepProjects';
import ReactPageScroller from 'react-page-scroller';
import Choose from '../Choose/Choose';
import './Personal.scss';

class Personal extends React.Component{

  render(){

    return (
      <div className="personal" id={'personal'}>
      <ReactPageScroller
            pageOnChange={this.handlePageChange}
            containerWidth={window.innerWidth}
            containerHeight={window.innerHeight}
          >
          <StepProjects 
            title="Personal"
            subtitle="cssillustrations"
            summary="I have any projects in my mind, maybe the next 
                    Could be about narrative or travels.. I don’t know.
                    What do you think?"
            input
          />   
          <Choose displaySection={this.props.displaySection} /> 
      </ReactPageScroller>
      </div>
    );
  }
}

export default Personal;
