import React, { Component } from "react";
import {handleInputChange, handleRetrieveInput} from "../../HelperFunctions/componentFormHandler";

export default class Coursework extends Component {

    state = {
        club: ''
    }

    render() {
        return (
            <div className="form-group col-md-12">
                <label htmlFor="inputClubs">Clubs</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" name="club" className="btn customButton" onClick={(e) => handleRetrieveInput(e, this, "clubs")}>+</button>
                    </div>
                    <input type="text" name="club" value={this.state.club} className="form-control" id="inputClubs" placeholder="Clubs" onChange={handleInputChange.bind(this)} />
                </div>
            </div>
        );
    }
}