import React, { Component } from "react";

export default class Coursework extends Component {

    state = {
        coursework: ''
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleCourseworkEnter = (e) => {
        // Send back coursework text to Education.js
        this.props.setCoursework(this.state.coursework, "courseworks");

        this.setState({ coursework: '' });
    }

    render() {
        return (
            <div className="form-group col-md-12">
                <label htmlFor="inputCoursework">Relevant Coursework</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" className="btn customButton" onClick={this.handleCourseworkEnter}>+</button>
                    </div>
                    <input type="text" name="coursework" value={this.state.coursework} className="form-control" id="inputCoursework" placeholder="Relevant Coursework" onChange={this.handleInputChange} />
                </div>
            </div>
        );
    }
}