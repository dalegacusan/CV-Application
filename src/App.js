import React, { Component } from 'react';
import './App.css';
import Information from './components/Information';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Resume from './components/Resume/Resume';

// Todo:
/*
    [/] On add repeating input, display another input (edit: added a button instead)
    [/] Skip Button for Education & Achievements
    [] Validation for Clicking Skip without inputting anything to the form.
    [] Form Validation - check for empty inputs, etc.
    [] Back Button - Go back to previous component
*/

class App extends Component {

  state = {
    components: ["information", "education", "achievements", "skills", "awards"],
    // components: [],
    personalInfo: {
      name: '',
      mobileNo: '',
      email: '',
      website: '',
      location: '',
      personalDescription: '',
    },
    education: [],
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

  handleInformationSubmit = (e, formName, subComponentState, skip) => {
    e.preventDefault();

    if (formName === "achievements" || formName === "education") {

      if (!skip) {
        this.setState(prevState => {
          // Passes OBJECT
          return { [formName]: [...prevState[formName], subComponentState] };
        });

        return;
      }

    } else if (formName === "skills" || formName === "awards") {
      this.setState(prevState => {
        // Passes ARRAY
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
    let renderedComponent = null;
    const { components, personalInfo } = this.state;

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
            handleInformationSubmit={this.handleInformationSubmit.bind(this)}
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
      default:
        renderedComponent = (
          <Resume state={this.state} />
        )
    }

    return (
      <div className="App container">
        <div className="row d-flex justify-content-center">
          <p>CV Maker: Create professional resumes for free.</p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-12">
            {renderedComponent}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
