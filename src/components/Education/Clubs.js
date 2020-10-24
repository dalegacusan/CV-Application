import React, { Component } from "react";

export default class Coursework extends Component {

    state = {
        club: ''
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleClubEnter = (e) => {
        // Send back honor text to Education.js
        this.props.setclubs(this.state.club, "clubs");

        this.setState({ club: '' });
    }

    render() {
        return (
            <div className="form-group col-md-12">
                <label htmlFor="inputClubs">Clubs</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-primary" onClick={this.handleClubEnter}>+</button>
                    </div>
                    <input type="text" name="club" value={this.state.club} className="form-control" id="inputClubs" placeholder="Clubs" onChange={this.handleInputChange} />
                </div>
            </div>
        );
    }
}