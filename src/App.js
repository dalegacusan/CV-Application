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
    }
  };

  // Make a way to make the state being modified to be dynamic (not stuck to personalInfo)
  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState(currState => {
      return currState.personalInfo[name] = value;
    });
  }

  handleInformationSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      // Removes first item in components list to render next component in the DOM.
      const newComponents = [...prevState.components];
      newComponents.shift();

      return { components: newComponents }
    });
  }

  render() {
    console.log(this.state.personalInfo);

    let renderedComponent = null;
    const { components } = this.state;

    if (components[0] === "information") {
      renderedComponent = (
        <Information
          infoObj={this.state.personalInfo}
          handleInputChange={this.handleInputChange.bind(this)}
          handleInformationSubmit={this.handleInformationSubmit.bind(this)}
        />
      )
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
