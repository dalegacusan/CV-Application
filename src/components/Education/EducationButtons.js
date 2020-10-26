import React, { Component } from "react";

export default class EducationButtons extends Component {

    state = {
        buttonClicked: ''
    }

    handleOnSubmit = (e) => {
        const { name } = e.target;

        // For form handlers
        this.props.handleSubmit(e, name);

        // For re-rendering purposes
        this.setState({ buttonClicked: name });
    }

    render() {

        let saveClick = (
            <div>
                <button type="button" name="newEducation" className="btn newButton" value="newButton" onClick={this.handleOnSubmit}>New</button>
                <button type="button" name="nextComponent" className="btn skipButton" value="nextButton" onClick={this.handleOnSubmit}>Skip</button>
            </div>
        );

        let saveNew = (
            <div>
                <button type="button" name="submitEducation" className="btn saveButton" value="saveButton" onClick={this.handleOnSubmit}>Save</button>
            </div>
        );

        let buttonsToDisplay = saveNew;

        if (this.state.buttonClicked === "submitEducation") {
            buttonsToDisplay = saveClick;
        } else if (this.state.buttonClicked === "newButton") {
            buttonsToDisplay = saveNew;
        }

        return buttonsToDisplay;

    }

}