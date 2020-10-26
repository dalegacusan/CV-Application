import React, { Component } from 'react';
import Coursework from "./Coursework";
import Honors from "./Honors";
import Clubs from "./Clubs";
import EducationButtons from "./EducationButtons";

// Make one main function for courseworks, honors, clubs functions (handleInputChange, handleButtonSubmit)

export default class Education extends Component {

    state = {
        schoolName: '',
        status: 'Undergraduate',
        courseworks: [],
        honors: [],
        clubs: [],
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    setArray = (textToAdd, component) => {
        this.setState(currState => {
            return { [component]: [...currState[component], textToAdd] };
        });
    }

    handleSubmit = (e, buttonClicked) => {

        if (buttonClicked === "submitEducation") {
            // Don't skip - push to education array
            this.props.handleInformationSubmit(e, "education", this.state, false);
        } else if (buttonClicked === "newEducation") {
            // Clear values of form
                this.setState({
                    schoolName: '',
                    status: 'Undergraduate',
                    courseworks: [],
                    honors: [],
                    clubs: [],
                });
        } else if (buttonClicked === "nextComponent") {
            // Skip - don't push anything education array
            this.props.handleInformationSubmit(e, "education", this.state, true);
        }

    }

    render() {
        return (
            <div className="categoryBox">
                <p className="categoryHeader"><i className="fas fa-graduation-cap"></i>Education</p>
                <hr />
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputSchoolName">School Name</label>
                            <input type="text" name="schoolName" value={this.state.schoolName} className="form-control" id="inputSchoolName" placeholder="School Name" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputSchoolStatus">Status</label>
                            <select className="form-control" name="status" value={this.state.status} id="inputSchoolStatus" onChange={this.handleInputChange}>
                                <option>Undergraduate</option>
                                <option>Graduate</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <small>Press + button to add another relevant coursework/honor/club.</small>
                    </div>
                    <div className="form-row">
                        <Coursework setCoursework={this.setArray.bind(this)} />
                    </div>
                    <div className="form-row">
                        <Honors setHonors={this.setArray.bind(this)} />
                    </div>
                    <div className="form-row">
                        <Clubs setclubs={this.setArray.bind(this)} />
                    </div>

                    <div className="form-row d-flex flex-row-reverse">
                        <EducationButtons handleSubmit={this.handleSubmit.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }

}