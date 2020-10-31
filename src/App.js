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

  // // Mock State
  // state = {
  //   components: ["achievements", "awards", "edit", "resume"],
  //   personalInfo: {
  //     name: 'John Doe',
  //     mobileNo: '0123456789',
  //     email: 'johndoe@gmail.com',
  //     website: 'https://github.com/dalegacusan/',
  //     location: 'Nashville, Tennessee',
  //     personalDescription: 'Motivated student (3.6/4.0) who demonstrates strong work ethic and creative ability. Seeking to apply my graphic design skills and artistic drive as a summer intern at your company. Will leverage proven experience as a competent designer to contribute to company goals and needs.',
  //   },
  //   education: [
  //     {
  //       id: "3424gfd432f",
  //       schoolName: 'De La Salle University',
  //       status: 'Undergraduate',
  //       courseworks: [
  //         { id: "630eb68f", text: "Intro to Graphic Design" },
  //         { id: "7c7a62614681", text: "AP Art" },
  //         { id: "c106a26as", text: "Yearbook" },
  //         { id: "57095d1976c1s", text: "Computer Applications" }
  //       ],
  //       honors: [
  //         { id: "4b2d9b5ds", text: "Member of the National Honors Society and National Art Education Association" },
  //       ],
  //       clubs: [
  //         { id: "55a3f1e37", text: "Yearbook Club" },
  //         { id: "0734436d8", text: "Santa Monica Newspaper" },
  //         { id: "b0703a1e42e4fc392", text: "Spanish Club" }
  //       ]
  //     },
  //     {
  //       id: "fdsgsf23432dfsdf",
  //       schoolName: 'Colegio San Agustin Makati',
  //       status: 'Graduate',
  //       courseworks: [
  //         { id: "kosaas23", text: "AP Art" },
  //         { id: "fghndfewwe435", text: "Yearbook" },
  //         { id: "21efgh4533f", text: "Computer Applications" }
  //       ],
  //       honors: [
  //         { id: "fdfgjk4wd", text: "Member of the National Honors Society and National Art Education Association" },
  //         { id: "hfdds432gh", text: "Basketball MVP" }
  //       ],
  //       clubs: [
  //         { id: "vjk54resdffb", text: "Yearbook Club" },
  //         { id: "sdffdsghfh5342", text: "Santa Monica Newspaper" },
  //       ]
  //     }
  //   ],
  //   achievements: [
  //     {
  //       companyName: 'Yearbook Club',
  //       position: 'Yearbook Design Team Lead',
  //       contributions: [
  //         { id: "9b1deb4d", text: "Created a Yearbook logo designed to incorporate school mascot and colors; opted to use coat paper in 2016, which improved photo quality and increased profits by 5%" },
  //         { id: "2b0d7b3dcb6d", text: "Arrange all club photos and pages to correspond to yearbook theme" },
  //         { id: "3b7d", text: "Trained and supervised 2 sophomore students in graphic design" }
  //       ]
  //     },
  //     {
  //       companyName: 'Santa Monica Newspaper',
  //       position: 'Graphic Designer',
  //       contributions: [
  //         { id: "1b9d6bcd", text: "Procured advertising for school paper, saving organization 25% in costs" },
  //         { id: "bbfd", text: "Edited and curated photos used for school paper; increasing readership by 15%" },
  //         { id: "4b2d", text: "Contributed to school's online publication by designing page layouts to accommodate mobile screens" },
  //         { id: "ab8dfbbd4beds", text: "Custom design page layouts to fit articles, photos, and advertisements into strict format" }
  //       ]
  //     }
  //   ],
  //   skills: [
  //     { id: "2c5ea4c0", text: "Proficient in Photoshop and Adobe Creative Suite" },
  //     { id: "4067", text: "Basic knowledge of HTML" },
  //     { id: "12312321321", text: "Basic knowledge of Adobe Dream Weaver" },
  //     { id: "8bad", text: "Great photographer" },
  //     { id: "9b1deb4d3b7d", text: "Keen eye for aesthetics with good understanding of image gradients" },
  //     { id: "710b962e", text: "Intermediate speaking level in Spanish" },
  //   ],
  //   awards: [
  //     { id: "041c", text: "Nominated for Macmillan Prize for Illustration in 2016" },
  //     { id: "0123456789ab", text: "Submitted artwork to Ocean Awareness Student Art Contest 2016" },
  //     { id: "92345", text: "Came in 2nd place in the Applied Arts 2016 Student Awards for submitting graphic design work under the category of Advertising" },
  //   ]
  // };

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
