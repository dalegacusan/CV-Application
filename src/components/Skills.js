import React, { Component } from 'react';
import { handleInputChange, setComponentArray, handleSubmit } from "../../HelperFunctions/componentFormHandler";

export default class Skills extends Component {

    state = {
        skillDescription: '',
        skills: []
    }

    handleInputChange = (e) => {
        const { value } = e.target;

        this.setState({ skillDescription: value });
    };

    setSkill = () => {
        this.setState(currState => {
            return { skills: [...currState.skills, this.state.skillDescription] };
        });

        this.setState({ skillDescription: '' });
    }

    render() {
        const { handleInformationSubmit } = this.props;

        return (
            <div className="categoryBox" >
                <p className="categoryHeader"><i className="fas fa-running"></i>Skills</p>
                <hr />
                <form onSubmit={(e) => handleInformationSubmit(e, "skills", this.state.skills)}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button type="button" name="skillDescription" className="btn customButton" onClick={this.setSkill}>+</button>
                                </div>
                                <input type="text" name="skillDescription" value={this.state.skillDescription} className="form-control" id="inputSkill" placeholder="Skill Description" onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-row d-flex flex-row-reverse">
                        <button type="submit" className="btn saveButton" value="Save">Save</button>
                    </div>
                </form>
            </div>
        );
    }

}