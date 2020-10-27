import React, { Component } from "react";

export default class Edit extends Component {

    handleEditSubmit = (e) => {
        e.preventDefault();

        const { name } = e.target;

        console.log("Anyeonghaseyo");
    }

    render() {

        const mockState = {
            personalInfo: {
                name: 'John Doe',
                mobileNo: '0123456789',
                email: 'johndoe@gmail.com',
                website: 'https://github.com/dalegacusan/',
                location: 'Nashville, Tennessee',
                personalDescription: 'Motivated student (3.6/4.0) who demonstrates strong work ethic and creative ability. Seeking to apply my graphic design skills and artistic drive as a summer intern at your company. Will leverage proven experience as a competent designer to contribute to company goals and needs.',
            },
            education: [
                {
                    schoolName: 'De La Salle University',
                    status: 'Undergraduate',
                    courseworks: ["Intro to Graphic Design", "AP Art", "Yearbook", "Computer Applications"],
                    honors: ["Member of the National Honors Society and National Art Education Association"],
                    clubs: ["Yearbook Club", "Santa Monica Newspaper", "Spanish Club"],
                },
                {
                    schoolName: 'Colegio San Agustin Makati',
                    status: 'Graduate',
                    courseworks: ["Intro to Graphic Design", "AP Art", "Yearbook", "Computer Applications"],
                    honors: ["Member of the Graphics Art Association"],
                    clubs: ["Yearbook Club", "Santa Monica Newspaper",],
                }
            ],
            achievements: [
                {
                    companyName: 'Yearbook Club',
                    position: 'Yearbook Design Team Lead',
                    contributions: [
                        "Created a Yearbook logo designed to incorporate school mascot and colors; opted to use coat paper in 2016, which improved photo quality and increased profits by 5%",
                        "Arrange all club photos and pages to correspond to yearbook theme",
                        "Trained and supervised 2 sophomore students in graphic design"
                    ]
                },
                {
                    companyName: 'Santa Monica Newspaper',
                    position: 'Graphic Designer',
                    contributions: [
                        "Procured advertising for school paper, saving organization 25% in costs",
                        "Edited and curated photos used for school paper; increasing readership by 15%",
                        "Custom design page layouts to fit articles, photos, and advertisements into strict format",
                        "Contributed to school's online publication by designing page layouts to accommodate mobile screens",
                    ]
                }
            ],
            skills: [
                "Proficient in Photoshop and Adobe Creative Suite",
                "Basic knowledge of HTML",
                "Basic knowledge of Adobe Dream Weaver",
                "Great photographer",
                "Keen eye for aesthetics with good understanding of image gradients",
                "Intermediate speaking level in Spanish",
            ],
            awards: [
                "Nominated for Macmillan Prize for Illustration in 2016",
                "Submitted artwork to Ocean Awareness Student Art Contest 2016",
                "Came in 2nd place in the Applied Arts 2016 Student Awards for submitting graphic design work under the category of Advertising",
            ]
        }

        const { handleInputChange } = this.props;

        const { personalInfo, education, achievements, skills, awards } = mockState;

        const { name, mobileNo, email, website, location, personalDescription } = personalInfo;

        return (
            <div>
                <div id="accordion">

                    {/* PERSONAL INFORMATION Card */}
                    <div className="card">
                        <div className="card-header" id="personalInformationHeading">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsePersonalInformation" aria-expanded="false" aria-controls="collapsePersonalInformation">
                                    Personal Information
                                </button>
                            </h5>
                        </div>

                        <div id="collapsePersonalInformation" className="collapse" aria-labelledby="personalInformationHeading" data-parent="#accordion">
                            <div className="card-body">
                                <form onSubmit={this.handleEditSubmit}>
                                    {/* FULL NAME */}
                                    <div className="form-group row">
                                        <label htmlFor="inputFullName" className="col-sm-3 col-form-label">Full Name</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="name" value={name} className="form-control" id="inputFullName" placeholder="Full Name" onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div>
                                    {/* MOBILE NUMBER */}
                                    <div className="form-group row">
                                        <label htmlFor="inputMobileNumber" className="col-sm-3 col-form-label">Mobile No.</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="mobileNo" value={mobileNo} className="form-control" id="inputMobileNumber" placeholder="Mobile No." onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div>
                                    {/* EMAIL ADDRESS */}
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail" className="col-sm-3 col-form-label">Email Address</label>
                                        <div className="col-sm-9">
                                            <input type="email" name="email" value={email} className="form-control" id="inputEmail" placeholder="Email Address" onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div>
                                    {/* WEBSITE */}
                                    <div className="form-group row">
                                        <label htmlFor="inputWebsite" className="col-sm-3 col-form-label">Website</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="website" value={website} className="form-control" id="inputWebsite" placeholder="Website" onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div>
                                    {/* LOCATION */}
                                    <div className="form-group row">
                                        <label htmlFor="inputLocation" className="col-sm-3 col-form-label">Location</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="location" value={location} className="form-control" id="inputLocation" placeholder="Location" onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div>
                                    {/* PERSONAL DESCRIPTION */}
                                    <div className="form-group row">
                                        <label htmlFor="inputPersonalDescription" className="col-sm-3 col-form-label">Brief Description</label>
                                        <div className="col-sm-9">
                                            <textarea name="personalDescription" value={personalDescription} className="form-control" id="inputPersonalDescription" rows="6" placeholder="Tell us more about yourself..." onChange={(e) => handleInputChange(e, "personalInfo")} ></textarea>
                                        </div>
                                    </div>
                                    <div className="form-row d-flex flex-row-reverse">
                                        <button type="button" name="savePersonalInfo" className="btn saveButton" value="Save">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* EDUCATION Card */}
                    <div className="card">
                        <div className="card-header" id="educationHeading">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseEducation" aria-expanded="true" aria-controls="collapseEducation">
                                    Education
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEducation" className="collapse show" aria-labelledby="educationHeading" data-parent="#accordion">
                            <div className="card-body">
                                <form onSubmit={this.handleEditSubmit}>
                                    {/* FULL NAME */}
                                    <div className="form-group row">
                                        {/* <label htmlFor="inputSchoolName">School Name</label> */}
                                        {
                                            education.map(item => {
                                                const { clubs, courseworks, honors, schoolName, status } = item;
                                                return (
                                                    <div>
                                                        <span>School Name: {schoolName}</span>
                                                        <br />
                                                        <span>Status: {status}</span>
                                                        <br />
                                                        <span>Clubs: </span>
                                                        {
                                                            clubs.map(club => {
                                                                return (
                                                                    <span>{club}</span>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                );
                                            })
                                        }
                                        {/* <input type="text" name="schoolName" value={this.state.schoolName} className="form-control" id="inputSchoolName" placeholder="School Name" onChange={this.handleInputChange} /> */}
                                    </div>
                                    {/* MOBILE NUMBER
                                    <div className="form-group row">
                                        <label htmlFor="inputMobileNumber" className="col-sm-3 col-form-label">Status</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="mobileNo" value={mobileNo} className="form-control" id="inputMobileNumber" placeholder="Mobile No." onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div>
                                    EMAIL ADDRESS
                                    <div className="form-group row">
                                        <label htmlFor="inputEmail" className="col-sm-3 col-form-label">Relevant Coursework</label>
                                        <div className="col-sm-9">
                                            <input type="email" name="email" value={email} className="form-control" id="inputEmail" placeholder="Email Address" onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div>
                                    WEBSITE
                                    <div className="form-group row">
                                        <label htmlFor="inputWebsite" className="col-sm-3 col-form-label">Honors</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="website" value={website} className="form-control" id="inputWebsite" placeholder="Website" onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div>
                                    LOCATION
                                    <div className="form-group row">
                                        <label htmlFor="inputLocation" className="col-sm-3 col-form-label">Clubs</label>
                                        <div className="col-sm-9">
                                            <input type="text" name="location" value={location} className="form-control" id="inputLocation" placeholder="Location" onChange={(e) => handleInputChange(e, "personalInfo")} />
                                        </div>
                                    </div> */}
                                    <div className="form-row d-flex flex-row-reverse">
                                        <button type="button" name="savePersonalInfo" className="btn saveButton" value="Save">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* ACHIEVEMENTS Card */}
                    <div className="card">
                        <div className="card-header" id="headingAchievements">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseAchievements" aria-expanded="false" aria-controls="collapseAchievements">
                                    Major Achievements
                                </button>
                            </h5>
                        </div>
                        <div id="collapseAchievements" className="collapse" aria-labelledby="headingAchievements" data-parent="#accordion">
                            <div className="card-body">
                                Major Achievements Component goes here
                            </div>
                        </div>
                    </div>

                    {/* SKILLS Card */}
                    <div className="card">
                        <div className="card-header" id="headingSkills">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSkills" aria-expanded="false" aria-controls="collapseSkills">
                                    Additional Skills
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSkills" className="collapse" aria-labelledby="headingSkills" data-parent="#accordion">
                            <div className="card-body">
                                <p>Additional Skills Component goes here</p>
                            </div>
                        </div>
                    </div>

                    {/* AWARDS, HONORS, AND HONORARY MENTIONS Card */}
                    <div className="card">
                        <div className="card-header" id="headingAwards">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseAwards" aria-expanded="false" aria-controls="collapseAwards">
                                    Awards, Honors, and Honorary Mentions
                                </button>
                            </h5>
                        </div>
                        <div id="collapseAwards" className="collapse" aria-labelledby="headingAwards" data-parent="#accordion">
                            <div className="card-body">
                                <p>Awards, Honors, and Honorary Mentions Component goes here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}