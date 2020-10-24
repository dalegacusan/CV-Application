import React, { Component } from "react";

export default class AchievementsButtons extends Component {

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
                <button type="button" name="newAchievement" className="btn btn-primary" value="newButton" onClick={this.handleOnSubmit}>New</button>
                <button type="button" name="nextComponent" className="btn btn-dark" value="nextButton" onClick={this.handleOnSubmit}>Skip</button>
            </div>
        );

        let saveNew = (
            <div>
                <button type="button" name="submitAchievement" className="btn btn-success" value="saveButton" onClick={this.handleOnSubmit}>Save</button>
            </div>
        );

        let buttonsToDisplay = saveNew;

        if (this.state.buttonClicked === "submitAchievement") {
            buttonsToDisplay = saveClick;
        } else if (this.state.buttonClicked === "newAchievement") {
            buttonsToDisplay = saveNew;
        }

        return buttonsToDisplay;

    }

}