import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Information from './components/Information';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Edit from "./components/Edit/Edit";
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
    components: ["information", "education", "achievements", "skills", "awards", "edit", "resume"],
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
    awards: [],
    skills: []
  };

  handleInputChange = (e, formName, id) => {
    const { name, value } = e.target;

    this.setState(prevState => {

      const currState = { ...prevState };

      if (formName === "education" || formName === "achievements" || formName === "skills" || formName === "awards") {

        // Input Groups
        if (name === "coursework" || name === "honor" || name === "club" || name === "contribution") {
          for (let i = 0; i < currState[formName].length; i++) {
            const currentObj = currState[formName][i];

            const itemsArray = currState[formName][i][`${name}s`];

            for (let j = 0; j < itemsArray.length; j++) {
              const item = itemsArray[j];
              if (item.id === id) {
                currentObj[`${name}s`][j] = { id: item.id, text: value };

                return currState[formName][i] = currentObj;
              }
            }

          }
        } else if (name === "skillDescription" || name === "award") {
          for (let i = 0; i < currState[formName].length; i++) {
            const currentObj = currState[formName][i];

            if (currentObj.id === id) {
              currentObj.text = value;

              return currState[formName][i] = currentObj;
            }
          }
        } else {
          // For Sole Inputs of each Card
          for (let i = 0; i < currState[formName].length; i++) {
            const currentObj = currState[formName][i];

            if (currentObj.id === id) {
              currentObj[name] = value;

              return currState[formName][name] = currentObj;
            }
          }
        }

      } else {
        // For Personal Information Card Only
        return currState[formName][name] = value;
      }

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
    } else if (formName === "edit") {
      console.log("I'm here");
      this.setState(subComponentState);
      return;
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
      case "edit":
        renderedComponent = (
          <Edit
            state={this.state}
            handleInputChange={this.handleInputChange.bind(this)}
            handleInformationSubmit={this.handleInformationSubmit.bind(this)}
          />
        )
        break;
      case "resume":
        renderedComponent = (
          <Resume
            state={this.state}
            handleInputChange={this.handleInputChange.bind(this)}
          />
        )
        break;
    }

    return (
      <div className={"App container"}>
        <div className="row d-flex justify-content-center">
          <Header />
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
