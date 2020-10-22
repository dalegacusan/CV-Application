import React, { Component } from 'react';

export default class Awards extends Component {

    state = {
        awardDescription: '',
        awards: []
    }

    handleInputChange = (e) => {
        const { value } = e.target;

        this.setState({ awardDescription: value });
    };

    setAward = () => {
        this.setState(currState => {
            return { awards: [...currState.awards, this.state.awardDescription] };
        });

        this.setState({awardDescription: ''});
    }

    render() {
        const { handleInformationSubmit } = this.props;

        return (
            <div className="categoryBox" >
                <p>Awards, Honors, and Honorary Mentions</p>
                <hr />
                <form onSubmit={(e) => handleInformationSubmit(e, "awards", this.state.awards)}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <input type="text" value={this.state.awardDescription} className="form-control" id="inputAchievement" placeholder="Achievement" onChange={this.handleInputChange}/>
                            <button type="button" className="btn btn-primary" onClick={this.setAward}>Add Achievement</button>
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