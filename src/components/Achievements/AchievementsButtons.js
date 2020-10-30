import React, { Component } from "react";

export default class AchievementsButtons extends Component {

    state = {
        buttonClicked: ''
    }

    handleOnSubmit = (e) => {
        const { value } = e.target;

        // For form handlers
        this.props.handleSubmit(e);

        // For re-rendering buttons display
        this.setState({ buttonClicked: value });
    }

    render() {

        let saveClick = (
            <div>
                <button type="button" name="newAchievement" className="btn newButton" value="newState" onClick={this.handleOnSubmit}>New</button>
                <button type="button" name="nextComponent" className="btn skipButton" value="nextButton" onClick={this.handleOnSubmit}>Skip</button>
            </div>
        );

        let saveNew = (
            <div>
                <button type="button" name="achievements" className="btn saveButton" value="save" onClick={this.handleOnSubmit}>Save</button>
            </div>
        );

        let buttonsToDisplay = saveNew;

        if (this.state.buttonClicked === "save") {
            buttonsToDisplay = saveClick;
        } else if (this.state.buttonClicked === "newButton") {
            buttonsToDisplay = saveNew;
        }

        return buttonsToDisplay;

    }

}