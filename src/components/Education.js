import React from 'react';

export default function Education(props) {

    const { handleInputChange, handleInformationSubmit } = props;
    const { schoolName, status, coursework, honors, clubs } = props.infoObj;

    return (
        <div className="categoryBox">
            <p>Education</p>
            <hr />
            <form onSubmit={handleInformationSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSchoolName">School Name</label>
                        <input type="text" name="schoolName" value={schoolName} className="form-control" id="inputSchoolName" placeholder="School Name" onChange={handleInputChange} />
                    </div>
                    {/*  */}
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSchoolStatus">Status</label>
                        <select className="form-control" name="status" value={status} id="inputSchoolStatus" onChange={handleInputChange}>
                            <option>Undergraduate</option>
                            <option>Graduate</option>
                        </select>
                    </div>
                </div>
                <div>
                    <small>Please separate the following with commas.</small>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputCoursework">Relevant Coursework</label>
                        <input type="text" name="coursework" value={coursework} className="form-control" id="inputCoursework" placeholder="Relevant Coursework" onChange={handleInputChange} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputHonors">Honors</label>
                        <input type="text" name="honors" value={honors} className="form-control" id="inputHonors" placeholder="Honors" onChange={handleInputChange} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputClubs">Clubs</label>
                        <input type="text" name="clubs" value={clubs} className="form-control" id="inputClubs" placeholder="Clubs" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-row d-flex flex-row-reverse">
                    <button type="submit" className="btn btn-success" value="Save">Save</button>
                </div>
            </form>
        </div>
    );
}