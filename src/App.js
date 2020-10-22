import React, { Component } from 'react';
import './App.css';
import Information from './components/Information';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Awards from './components/Awards';

class App extends Component {

  state = {
    components: ["information", "education", "achievements", "skills", "awards"],
    personalInfo: {
      name: '',
      mobileNo: '',
      email: '',
      website: '',
      location: '',
      personalDescription: '',
    },
    education: {
      schoolName: '',
      status: 'Undergraduate',
      coursework: '',
      honors: '',
      clubs: '',
    },
    achievements: [],
    skills: [],
    awards: []
  };

  // Make a way to make the state being modified to be dynamic (not stuck to personalInfo)
  handleInputChange = (e, formName) => {
    const { name, value } = e.target;

    this.setState(currState => {
      return currState[formName][name] = value;
    });
  }

  handleInformationSubmit = (e, formName, subComponentState) => {
    e.preventDefault();

    if (formName === "achievements") {
      this.setState(prevState => {
        return { achievements: [...prevState.achievements, subComponentState] };
      });
    } else if (formName === "skills" || formName === "awards" ) {
      this.setState(prevState => {
        return { [formName]: [...prevState[formName], ...subComponentState] };
      });
    }

    this.setState((prevState) => {
      // Removes first item in components list to render next component in the DOM.
      const newComponents = [...prevState.components];
      newComponents.shift();

      return { components: newComponents }
    });
  }

  render() {
    console.log(this.state);
    let renderedComponent = null;
    const { components, personalInfo, education, achievements, skills } = this.state;

    switch (components[0]) {
      case "information":
        renderedComponent = (
          <Information
            infoObj={personalInfo}
            handleInputChange={(e) => this.handleInputChange(e, "personalInfo")}
            handleInformationSubmit={(e) => this.handleInformationSubmit(e, "personalInfo")}
          />
        )
        break;
      case "education":
        renderedComponent = (
          <Education
            infoObj={education}
            handleInputChange={(e) => this.handleInputChange(e, "education")}
            handleInformationSubmit={(e) => this.handleInformationSubmit(e, "education")}
          />
        )
        break;
      case "achievements":
        renderedComponent = (
          <Achievements
            handleInformationSubmit={this.handleInformationSubmit.bind(this)}
          />
        )
        break;
      case "skills":
        renderedComponent = (
          <Skills
            handleInformationSubmit={this.handleInformationSubmit.bind(this)}
          />
        )
        break;
      case "awards":
        renderedComponent = (
          <Awards
            handleInformationSubmit={this.handleInformationSubmit.bind(this)}
          />
        )
        break;
    }

    return (
      <div className="App container">
        <div className="row d-flex justify-content-center">
          <p>CV Maker: Create professional resumes for free.</p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-12">
            {renderedComponent}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
