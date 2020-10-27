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

        this.setState({ contribText: '' });
    };

    render() {
        return (
            <div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" className="btn customButton" onClick={this.handleContributionClick}>+</button>
                    </div>
                    <input type="text" name="contribution" value={this.state.contribText} className="form-control" id="inputsContributions" placeholder="Relevant Contributions" onChange={this.handleContribInput} />
                </div>
            </div>
        );
    }

}