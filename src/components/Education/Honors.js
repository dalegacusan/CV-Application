import React, { Component } from "react";
import {handleInputChange, handleRetrieveInput} from "../../HelperFunctions/componentFormHandler";

export default class Coursework extends Component {

    state = {
        honor: ''
    }

    render() {
        return (
            <div className="form-group col-md-12">
                <label htmlFor="inputHonors">Honors</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" name="honor" className="btn customButton" onClick={(e) => handleRetrieveInput(e, this, "honors")}>+</button>
                    </div>
                    <input type="text" name="honor" value={this.state.honor} className="form-control" id="inputHonors" placeholder="Honors" onChange={handleInputChange.bind(this)} />
                </div>
            </div>
        );
    }
}