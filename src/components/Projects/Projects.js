import React from 'react';
import StepProjects from '../StepProjects/StepProjects';
import Choose from '../Choose/Choose';
import ReactPageScroller from 'react-page-scroller';
import Title from '../TitlePage/TitlePage';

import './Projects.scss';

class Projects extends React.Component{

  render(){
    var logosFirst = ['logo-hugo.png', 'logo-html.png','logo-sass.png', 'logo-git.png'];
    var logosSecond = ['logo512.png', 'logo-html.png','logo-sass.png'];
    var logosThird = ['logo-node.png', 'logo-mongo.png', 'logo-git.png'];
    return (
      <div className="projects" id={'projects'}>
      <ReactPageScroller
            pageOnChange={this.handlePageChange}
            containerWidth={window.innerWidth}
            containerHeight={window.innerHeight}
          >
          <StepProjects 
            subtitle="cssillustrations"
            summary="This is my first project in production. In this blog I teach how to do illustrations in HTML & CSS. This blog was created with Hugo."
            link="https://cssillustrations.com"
            year="2019"
            logos={logosFirst}
            directionDown      
            footer="Projects - 2019"    
          />  
          <StepProjects 
            subtitle="Interactive CV"
            summary="The interactive CV is this website. I'm learning React and I try to practise with this projects."
            year="2020"
            logos={logosSecond}
            directionDown
            directionUp
            footer="Projects - 2020"
          />  
          <StepProjects 
            subtitle="Next Projects"
            summary="Nowadays I don't have a lot of projects in production, but I'm working in it!"
            logos={logosThird}
            directionDown
            directionUp
            footer="Projects in cooming"
          />  

          <Choose displaySection={this.props.displaySection} /> 
      </ReactPageScroller>
      </div>
    );
  }
}

export default Projects;
