import React from 'react';
import StepProjects from '../StepProjects/StepProjects';
import ReactPageScroller from 'react-page-scroller';
import Choose from '../Choose/Choose';
import './Study.scss';

class Study extends React.Component{

  render(){

    return (
      <div className="study" id={'study'}>
      <ReactPageScroller
            pageOnChange={this.handlePageChange}
            containerWidth={window.innerWidth}
            containerHeight={window.innerHeight}
          >
          <StepProjects 
            title="Study"
            subtitle="cssillustrations"
            summary="I have any projects in my mind, maybe the next 
                    Could be about narrative or travels.. I don’t know.
                    What do you think?"
            input
          />  
          <StepProjects 
            title="Study"
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

export default Study;
