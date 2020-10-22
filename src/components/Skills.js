import React, { Component } from 'react';

export default class Skills extends Component {

    state = {
        skillDescription: '',
        skills: []
    }

    handleInputChange = (e) => {
        const { value } = e.target;

        this.setState({ skillDescription: value });
    };

    setSkill = () => {
        this.setState(currState => {
            return { skills: [...currState.skills, this.state.skillDescription] };
        });

        this.setState({skillDescription: ''});
    }

    render() {
        const { handleInformationSubmit } = this.props;

        return (
            <div className="categoryBox" >
                <p>Skills</p>
                <hr />
                <form onSubmit={(e) => handleInformationSubmit(e, "skills", this.state.skills)}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <input type="text" name="skillDescription" value={this.state.skillDescription} className="form-control" id="inputSkill" placeholder="Skill Description" onChange={this.handleInputChange} />
                            <button type="button" className="btn btn-primary" onClick={this.setSkill}>Add Skill</button>
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