import React, { useState } from 'react';

export default function Education() {

    const [education, setEducation] = useState(
        {
            schoolName: '',
            status: "Undergraduate",
            coursework: '',
            honors: '',
            clubs: ''
        }
    );

    const handleInputChange = e => {
        const { name, value } = e.target;
        
        setEducation({ ...education, [name]: value });
    };

    const handleEducation = (e) => {
        e.preventDefault();

        console.log(education);
    }

    return (
        <div className="categoryBox">
            <p>Education</p>
            <hr />
            <form onSubmit={handleEducation}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSchoolName">School Name</label>
                        <input type="text" name="schoolName" value={education.schoolName} className="form-control" id="inputSchoolName" placeholder="School Name" onChange={handleInputChange} />
                    </div>
                    {/*  */}
                    <div className="form-group col-md-6">
                        <label htmlFor="inputSchoolStatus">Status</label>
                        <select className="form-control" name="status" value={education.status} id="inputSchoolStatus" onChange={handleInputChange}>
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
                        <input type="text" name="coursework" value={education.coursework} className="form-control" id="inputCoursework" placeholder="Relevant Coursework" onChange={handleInputChange} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputHonors">Honors</label>
                        <input type="text" name="honors" value={education.honors} className="form-control" id="inputHonors" placeholder="Honors" onChange={handleInputChange} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="inputClubs">Clubs</label>
                        <input type="text" name="clubs" value={education.clubs} className="form-control" id="inputClubs" placeholder="Clubs" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-row d-flex flex-row-reverse">
                    <button type="submit" className="btn btn-success" value="Save">Save</button>
                </div>
            </form>
        </div>
    );
}