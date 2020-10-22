import React, { Component } from 'react';
import Contributions from './Contributions';

export default class Achievements extends Component {

    state = {
        contributions: []
    }

    setContribution = (contribText) => {
        this.setState(currState => {
            return {contributions: [...currState.contributions, contribText]};
        });
    }

    render() {

        const { handleInputChange, handleInformationSubmit } = this.props;
        const { companyName, position } = this.props.infoObj;

        return (
            <div className="categoryBox">
                <p>Achievements</p>
                <hr />
                <form onSubmit={(e) => handleInformationSubmit(e, "achievements", this.state.contributions)}>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="inputCompanyName">Company/Organization Name</label>
                            <input type="text" name="companyName" value={companyName} className="form-control" id="inputCompanyName" placeholder="Company/Organization Name" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputPosition">Position/Role</label>
                            <input type="text" name="position" value={position} className="form-control" id="inputPosition" placeholder="Position" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputsContributions">Relevant Contributions</label>
                            <Contributions setContribution={this.setContribution} />
                        </div>
                    </div>
                    <div className="form-row d-flex flex-row-reverse">
                        <button type="submit" className="btn btn-success" value="Save">Save</button>
                    </div>
                </form>
            </div>
        );
    }

}