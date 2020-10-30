import React, { Component } from 'react';
import AchievementsButtons from "./AchievementsButtons";
import Contributions from './Contributions';
import { handleInputChange, setComponentArray, handleSubmit } from "../../HelperFunctions/componentFormHandler";

export default class Achievements extends Component {

    state = {
        companyName: '',
        position: '',
        contributions: []
    }

    render() {

        return (
            <div className="categoryBox">
                <p className="categoryHeader"><i className="fas fa-award"></i>Achievements</p>
                <hr />
                <form>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="inputCompanyName">Company/Organization Name</label>
                            <input type="text" name="companyName" value={this.state.companyName} className="form-control" id="inputCompanyName" placeholder="Company/Organization Name" onChange={handleInputChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputPosition">Position/Role</label>
                            <input type="text" name="position" value={this.state.position} className="form-control" id="inputPosition" placeholder="Position" onChange={handleInputChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <Contributions setArray={setComponentArray.bind(this)} />
                    </div>
                    <div className="form-row d-flex flex-row-reverse">
                        <AchievementsButtons handleSubmit={handleSubmit.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }

}