import React, { Component } from 'react';

export default class Contributions extends Component {

    state = {
        contribText: ''
    };

    handleContribInput = (e) => {
        const { value } = e.target;
        this.setState({ contribText: value });
    }

    handleContributionClick = () => {
        // Send back contribution text to Achievements.js
        this.props.setContribution(this.state.contribText);

        this.setState({contribText: ''});
    };

    render() {
        return (
            <div>
                <input type="text" name="contribution" value={this.state.contribText} className="form-control" id="inputsContributions" placeholder="Relevant Contributions" onChange={this.handleContribInput} />
                <button type="button" onClick={this.handleContributionClick} className="btn btn-primary">Add Contribution</button>
            </div>
        );
    }

}