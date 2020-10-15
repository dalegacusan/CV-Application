import React, { Component } from 'react';

class PersonalInformation extends Component {

    state = {
        toggleInfoComponent: true,
        personalInfo: {
            name: '',
            mobileNo: '',
            email: '',
            website: '',
            location: '',
            personalDescription: '',
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState(currState => {
            return currState.personalInfo[name] = value;
        });
    }

    handleInformation = (e) => {
        e.preventDefault();

        this.setState({toggleInfoComponent: false});
        console.log(this.state.personalInfo);
    }

    render() {
        let infoComponent = null;

        if(this.state.toggleInfoComponent){
            infoComponent = (
                <div className="categoryBox">
                <p>Personal Information</p>
                <hr />
                <form onSubmit={this.handleInformation}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputFullName">Full Name</label>
                            <input type="text" name="name" value={this.state.personalInfo.name} className="form-control" id="inputFullName" placeholder="Full Name" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputMobileNumber">Mobile No.</label>
                            <input type="text" name="mobileNo" value={this.state.personalInfo.mobileNo} className="form-control" id="inputMobileNumber" placeholder="Mobile No." onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email Address</label>
                            <input type="email" name="email" value={this.state.personalInfo.email} className="form-control" id="inputEmail" placeholder="Email Address" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputWebsite">Website</label>
                            <input type="text" name="website" value={this.state.personalInfo.website} className="form-control" id="inputWebsite" placeholder="Website" onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="inputLocation">Location</label>
                            <input type="text" name="location" value={this.state.personalInfo.location} className="form-control" id="inputLocation" placeholder="Location" onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="inputPersonalDescription">Brief Description</label>
                            <textarea name="personalDescription" value={this.state.personalInfo.personalDescription} className="form-control" id="inputPersonalDescription" rows="6" placeholder="Tell us more about yourself..." onChange={this.handleInputChange}></textarea>
                        </div>
                    </div>
                    <div className="form-row d-flex flex-row-reverse">
                        <button type="submit" className="btn btn-success" value="Save">Save</button>
                    </div>
                </form>
            </div>
            );
        }

        return (
            <div>
                {infoComponent}
            </div>
            
        );
    }
}

export default PersonalInformation;