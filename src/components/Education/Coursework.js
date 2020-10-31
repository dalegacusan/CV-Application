import React, { Component } from "react";
import { handleInputChange, handleRetrieveInput } from "../../HelperFunctions/componentFormHandler";

export default class Coursework extends Component {

    state = {
        coursework: ''
    }

    render() {
        return (
            <div className="form-group col-md-12">
                <label htmlFor="inputCoursework">Relevant Coursework</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" name="coursework" className="btn customButton" onClick={(e) => handleRetrieveInput(e, this, "courseworks")}>+</button>
                    </div>
                    <input type="text" name="coursework" value={this.state.coursework} className="form-control" id="inputCoursework" placeholder="Relevant Coursework" onChange={handleInputChange.bind(this)} />
                </div>
            </div>
        );
    }
}