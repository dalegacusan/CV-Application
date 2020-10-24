import React, { Component } from "react";

export default class Coursework extends Component {

    state = {
        honor: ''
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleHonorEnter = (e) => {
        // Send back honor text to Education.js
        this.props.setHonors(this.state.honor, "honors");

        this.setState({ honor: '' });
    }

    render() {
        return (
            <div className="form-group col-md-12">
                <label htmlFor="inputHonors">Honors</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-primary" onClick={this.handleHonorEnter}>+</button>
                    </div>
                    <input type="text" name="honor" value={this.state.honor} className="form-control" id="inputHonors" placeholder="Honors" onChange={this.handleInputChange} />
                </div>
            </div>
        );
    }
}