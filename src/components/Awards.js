import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

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
            
            return { awards: [...currState.awards, {id: uuidv4(), text: this.state.awardDescription}] };
        });

        this.setState({ awardDescription: '' });
    }

    render() {
        const { handleInformationSubmit } = this.props;

        return (
            <div className="categoryBox" >
                <p className="categoryHeader"><i className="fas fa-trophy"></i>Awards, Honors, and Honorary Mentions</p>
                <hr />
                <form onSubmit={(e) => handleInformationSubmit(e, "awards", this.state.awards)}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button name="award" type="button" className="btn customButton" onClick={this.setAward}>+</button>
                                </div>
                                <input type="text" name="award" value={this.state.awardDescription} className="form-control" placeholder="Achievement Description" onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-row d-flex flex-row-reverse">
                        <button type="submit" className="btn saveButton" value="Save">Save</button>
                    </div>
                </form>
            </div>
        );
    }

}