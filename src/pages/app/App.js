import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import Counter from '../../components/Counter/Counter';
import Hello from '../../components/Hello/Hello';
import Choose from '../../components/Choose/Choose';
import Presentation from '../../components/Presentation/Presentation';
import Projects from '../../components/Projects/Projects';
import Experience from '../../components/Experience/Experience';
import Study from '../../components/Study/Study';
import Personal from '../../components/Personal/Personal';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: null,
      nameUser: "Anonymous",
      firstTimeName: false,
      points: 0,
      displaySection: true,
      displayProject: false,
      displayExperience: false,
      displayStudy: false,
      displayChoose: false,
      displayPersonal: false,
      onClickPosition: new Set(),
      counter: {
        digitOne:0,
        digitTwo:0,
        digitThree:0
      },
      pointsTable:{
        experience: [100, 75, 25, 0],
        project: [75, 100, 50, 25],
        study: [50, 75, 100, 25],
        personal: [0, 0, 0, 25],
      },
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
    this.plusPoints = this.plusPoints.bind(this);
    this.handleDisplaySection = this.handleDisplaySection.bind(this);
    this.initialCounter = this.initialCounter.bind(this);
  }

  componentDidMount(){
    this.initialCounter();
  }

  initialCounter(){
    this.setState({
      counter: {
        digitOne:0,
        digitTwo:0,
        digitThree:0
      }
    });
  }

  updateCounter(points){
    var counter = points.toString().padStart(3, '0').split('');
    var digits = counter.map(Number);
    this.setState({
      counter: {
        digitOne:digits[0],
        digitTwo:digits[1],
        digitThree:digits[2]
      }
    });
    
  }
  
  handleNameChange(e) {
    this.setState({ nameUser: e.target.value });
    if (this.state.firstTimeName === false){
      let plus = this.state.points + 5;
      this.setState ({ 
        firstTimeName: true,
        points: plus
      });
      this.updateCounter(plus);
    }
  }

  handlePageChange = number => {
    this.setState({ currentPage: number });
  };

  handleDisplaySection(e){
    const section = e.currentTarget.id;
    if(section === "project"){
  
      this.setState({ 
        displayProject: true,
        displaySection: false,
        displayExperience: false,
        displayStudy: false,
        displayPersonal: false,
        displayChoose: false,
      });
    } else if (section === "experience") {
      this.setState({ 
        displayProject: false,
        displaySection: false,
        displayExperience: true,
        displayStudy: false,
        displayPersonal: false,
        displayChoose: false,
      });
    } else if (section === "study") {
      this.setState({ 
        displayProject: false,
        displaySection: false,
        displayExperience: false,
        displayStudy: true,
        displayPersonal: false,
        displayChoose: false,
      });
    } else if (section === "personal") {
      this.setState({ 
        displayProject: false,
        displaySection: false,
        displayExperience: false,
        displayStudy: false,
        displayPersonal: true,
        displayChoose: false,
      });
    }  else {
      this.setState({ 
        displayProject: false,
        displaySection: false,
        displayExperience: false,
        displayStudy: false,
        displayPersonal: false,
        displayChoose: true,
      });
    }
    this.plusPoints(section);
  }

  plusPoints(section){
    var list = this.state.onClickPosition;
    if(!list.has(section) && section !== ""){
      this.setState(({ onClickPosition }) => ({
        onClickPosition: new Set(onClickPosition).add(section)
      }));
      var position = this.state.onClickPosition.size;
      var points = this.state.pointsTable[section][position];
      this.calculatePoints(points);
    } 
  }
  
  calculatePoints = (sumPoints) => {

    let plus = this.state.points + sumPoints;
      this.setState ({ 
        points: plus
      });
     
    this.updateCounter(plus);
  }


  render(){
    
    
    return (
      <>
          <Counter  
            digitOne={this.state.counter.digitOne}
            digitTwo={this.state.counter.digitTwo}
            digitThree={this.state.counter.digitThree}
           />
             {this.state.displaySection ?  <ReactPageScroller
            pageOnChange={this.handlePageChange}
            containerWidth={window.innerWidth}
            containerHeight={window.innerHeight}
          >
            <Hello handleChange={this.handleNameChange} />
            <Presentation name={this.state.nameUser} />
            <Choose class="hello" displaySection={this.handleDisplaySection} /> 
          </ReactPageScroller> : null}  
            {this.state.displayProject ? <Projects displaySection={this.handleDisplaySection} /> : null }
            {this.state.displayExperience ? <Experience displaySection={this.handleDisplaySection} /> : null }
            {this.state.displayStudy ? <Study displaySection={this.handleDisplaySection} /> : null }
            {this.state.displayPersonal ? <Personal displaySection={this.handleDisplaySection} /> : null }
            {this.state.displayChoose ?  <Choose class="hello" displaySection={this.handleDisplaySection} /> : null}
      </>
    );
  }
}

export default App;