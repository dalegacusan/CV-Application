import React, { Component } from 'react';
import Coursework from "./Coursework";
import Honors from "./Honors";
import Clubs from "./Clubs";
import EducationButtons from "./EducationButtons";
import {handleInputChange, setComponentArray, handleSubmit} from "../../HelperFunctions/componentFormHandler";

// Make one main function for courseworks, honors, clubs functions (handleInputChange, handleButtonSubmit)

export default class Education extends Component {

    state = {
        schoolName: '',
        status: 'Undergraduate',
        courseworks: [],
        honors: [],
        clubs: [],
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
                            <input type="text" name="schoolName" value={this.state.schoolName} className="form-control" id="inputSchoolName" placeholder="School Name" onChange={handleInputChange.bind(this)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputSchoolStatus">Status</label>
                            <select className="form-control" name="status" value={this.state.status} id="inputSchoolStatus" onChange={handleInputChange.bind(this)}>
                                <option>Undergraduate</option>
                                <option>Graduate</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <small>Press + button to add another relevant coursework/honor/club.</small>
                    </div>
                    <div className="form-row">
                        <Coursework setArray={setComponentArray.bind(this)} />
                    </div>
                    <div className="form-row">
                        <Honors setArray={setComponentArray.bind(this)} />
                    </div>
                    <div className="form-row">
                        <Clubs setArray={setComponentArray.bind(this)} />
                    </div>

                    <div className="form-row d-flex flex-row-reverse">
                        <EducationButtons handleSubmit={handleSubmit.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }

}