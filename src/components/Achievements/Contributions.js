import React, { Component } from 'react';
import { handleInputChange, handleRetrieveInput } from "../../HelperFunctions/componentFormHandler";

export default class Contributions extends Component {

    state = {
        contribution: ''
    };

    render() {
        return (
            <div className="form-group col-md-12">
                <label htmlFor="inputContribution">Relevant Contributions</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" name="contribution" className="btn customButton" onClick={(e) => handleRetrieveInput(e, this, "contributions")}>+</button>
                    </div>
                    <input type="text" name="contribution" value={this.state.contribution} className="form-control" id="inputContributions" placeholder="Relevant Contribution" onChange={handleInputChange.bind(this)} />
                </div>
            </div>
        );
    }

}