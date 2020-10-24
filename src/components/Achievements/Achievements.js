import React, { Component } from 'react';
import AchievementsButtons from "./AchievementsButtons";
import Contributions from './Contributions';

export default class Achievements extends Component {

    state = {
        companyName: '',
        position: '',
        contributions: []
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    setContribution = (contribText) => {
        this.setState(currState => {
            return { contributions: [...currState.contributions, contribText] };
        });
    }

    handleSubmit = (e, buttonClicked) => {

        if (buttonClicked === "submitAchievement") {
            // Don't skip - push to education array
            this.props.handleInformationSubmit(e, "achievements", this.state, false);
        } else if (buttonClicked === "newAchievement") {
            // Clear values of form
            this.setState({
                companyName: '',
                position: '',
                contributions: []
            });
        } else if (buttonClicked === "nextComponent") {
            // Skip - don't push anything education array
            this.props.handleInformationSubmit(e, "achievements", this.state, true);
        }

    }

    render() {

        return (
            <div className="categoryBox">
                <p>Achievements</p>
                <hr />
                <form>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="inputCompanyName">Company/Organization Name</label>
                            <input type="text" name="companyName" value={this.state.companyName} className="form-control" id="inputCompanyName" placeholder="Company/Organization Name" onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputPosition">Position/Role</label>
                            <input type="text" name="position" value={this.state.position} className="form-control" id="inputPosition" placeholder="Position" onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputsContributions">Relevant Contributions</label>
                            <Contributions setContribution={this.setContribution} />
                        </div>
                    </div>
                    <div className="form-row d-flex flex-row-reverse">
                        <AchievementsButtons handleSubmit={this.handleSubmit.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }

}