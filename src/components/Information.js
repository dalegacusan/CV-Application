import React from 'react';

export default function PersonalInformation(props) {

    const { handleInputChange, handleInformationSubmit } = props;
    const { name, mobileNo, email, website, location, personalDescription } = props.infoObj;

    return (
        <div>
            <div className="categoryBox">
                <p className="categoryHeader"><i className="fas fa-user"></i>Personal Information</p>
                <hr />
                <form onSubmit={handleInformationSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputFullName">Full Name</label>
                            <input type="text" name="name" value={name} className="form-control" id="inputFullName" placeholder="Full Name" onChange={handleInputChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputMobileNumber">Mobile No.</label>
                            <input type="text" name="mobileNo" value={mobileNo} className="form-control" id="inputMobileNumber" placeholder="Mobile No." onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email Address</label>
                            <input type="email" name="email" value={email} className="form-control" id="inputEmail" placeholder="Email Address" onChange={handleInputChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputWebsite">Website</label>
                            <input type="text" name="website" value={website} className="form-control" id="inputWebsite" placeholder="Website" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="inputLocation">Location</label>
                            <input type="text" name="location" value={location} className="form-control" id="inputLocation" placeholder="Location" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12">
                            <label htmlFor="inputPersonalDescription">Brief Description</label>
                            <textarea name="personalDescription" value={personalDescription} className="form-control" id="inputPersonalDescription" rows="6" placeholder="Tell us more about yourself..." onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                    <div className="form-row d-flex flex-row-reverse">
                        <button type="submit" className="btn saveButton" value="Save">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}