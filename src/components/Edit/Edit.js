import React, { Component } from "react";
import classes from "./Edit.module.css";

export default class Edit extends Component {

    handleEditSubmit = (e) => {
        e.preventDefault();

        this.props.handleInformationSubmit();
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
                    courseworks: ["AP Art", "Yearbook", "Computer Applications"],
                    honors: ["Member of the Graphics Art Association", "Basketball MVP"],
                    clubs: ["Yearbook Club", "Santa Monica Newspaper"],
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

        const { handleInputChange, state } = this.props;
        const { personalInfo, education, achievements, skills, awards } = mockState;
        const { name, mobileNo, email, website, location, personalDescription } = personalInfo;

        return (
            <div>
                <div id="accordion">
                    {/* PERSONAL INFORMATION Card */}
                    <div className="card">
                        <div className="card-header" id="personalInformationHeading">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsePersonalInformation" aria-expanded="true" aria-controls="collapsePersonalInformation">
                                    Personal Information
                                </button>
                            </h5>
                        </div>

                        <div id="collapsePersonalInformation" className="collapse" aria-labelledby="personalInformationHeading" data-parent="#accordion">
                            <div className="card-body">
                                <form>
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
                                        <button type="button" name="save" className="btn saveButton" value="Save" onClick={this.handleEditSubmit}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* EDUCATION Card */}
                    <div className="card">
                        <div className="card-header" id="educationHeading">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEducation" aria-expanded="false" aria-controls="collapseEducation">
                                    Education
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEducation" className="collapse" aria-labelledby="educationHeading" data-parent="#accordion">
                            <div className="card-body">
                                <form>
                                    {
                                        education.map(school => {
                                            const { clubs, courseworks, honors, schoolName, status } = school;
                                            return (
                                                <div className={classes.arrayGroup}>
                                                    {/* SCHOOL NAME */}
                                                    <div className="form-group row">
                                                        <label htmlFor="inputSchoolName" className="col-sm-3 col-form-label">School Name: </label>
                                                        <div className="col-sm-9">
                                                            <input type="text" name="schoolName" value={schoolName} className="form-control" id="inputSchoolName" placeholder="School Name" onChange={handleInputChange.bind(this)} />
                                                        </div>
                                                    </div>
                                                    {/* STATUS */}
                                                    <div className="form-group row">
                                                        <label htmlFor="inputSchoolStatus" className="col-sm-3 col-form-label">Status: </label>
                                                        <div className="col-sm-9">
                                                            <select className="form-control" name="status" value={status} id="inputSchoolStatus" onChange={handleInputChange.bind(this)}>
                                                                <option>Undergraduate</option>
                                                                <option>Graduate</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/* COURSEWORKS */}
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label">Courseworks: </label>
                                                        <div className="col-sm-9">
                                                                {
                                                                    courseworks.map(coursework => {
                                                                        return (
                                                                            <div className={`input-group ${classes.itemsGroup}`}>
                                                                                <div className="input-group-prepend">
                                                                                    <button type="button" name="coursework" className="btn deleteButton" >-</button>
                                                                                </div>
                                                                                <input type="text" name="coursework" className="form-control" placeholder="Relevant Coursework" value={coursework} />
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                        </div>
                                                    </div>
                                                    {/* HONORS */}
                                                    <div className="form-group row">
                                                        <label htmlFor="inputSchoolName" className="col-sm-3 col-form-label">Honors: </label>
                                                        <div className="col-sm-9">
                                                            {
                                                                honors.map(honor => {
                                                                    return (
                                                                        <div className={`input-group ${classes.itemsGroup}`}>
                                                                            <div className="input-group-prepend">
                                                                                <button type="button" name="honor" className="btn deleteButton" >-</button>
                                                                            </div>
                                                                            <input type="text" name="honor" className="form-control" placeholder="Honors" value={honor} />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* CLUBS */}
                                                    <div className="form-group row">
                                                        <label htmlFor="inputSchoolName" className="col-sm-3 col-form-label">Clubs: </label>
                                                        <div className="col-sm-9">
                                                            {
                                                                clubs.map(club => {
                                                                    return (
                                                                        <div className={`input-group ${classes.itemsGroup}`}>
                                                                            <div className="input-group-prepend">
                                                                                <button type="button" name="club" className="btn deleteButton" >-</button>
                                                                            </div>
                                                                            <input type="text" name="club" className="form-control" placeholder="Clubs" value={club} />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    <div className="form-row d-flex flex-row-reverse">
                                        <button type="button" name="save" className="btn saveButton" value="save" onClick={this.handleEditSubmit.bind(this)}>Save</button>
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
                                <form>
                                    {
                                        achievements.map(achievement => {
                                            const { companyName, position, contributions } = achievement;
                                            return (
                                                <div className={classes.arrayGroup}>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputCompanyName" className="col-sm-4 col-form-label">Company/Organization Name</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" name="companyName" value={companyName} className="form-control" id="inputCompanyName" placeholder="Company/Organization Name" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputPosition" className="col-sm-4 col-form-label">Position/Role</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" name="position" value={position} className="form-control" id="inputPosition" placeholder="Position" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Contributions</label>
                                                        <div className="col-sm-8">
                                                            {
                                                                contributions.map(contribution => {
                                                                    return (
                                                                        <div className={`input-group ${classes.itemsGroup}`}>
                                                                            <div className="input-group-prepend">
                                                                                <button type="button" name="contribution" className="btn deleteButton" >-</button>
                                                                            </div>
                                                                            <input type="text" name="contribution" className="form-control" placeholder="Honors" value={contribution} />
                                                                        </div>
                                                                    );
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    <div className="form-row d-flex flex-row-reverse">
                                        <button type="button" name="save" className="btn saveButton" value="save" onClick={this.handleEditSubmit.bind(this)}>Save</button>
                                    </div>
                                </form>

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
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-4 col-form-label">Additional Skills</label>
                                        <div className="col-sm-8">
                                            {
                                                skills.map(skill => {
                                                    return (
                                                        <div className={`input-group ${classes.itemsGroup}`}>
                                                            <div className="input-group-prepend">
                                                                <button type="button" name="skillDescription" className="btn deleteButton" >-</button>
                                                            </div>
                                                            <input type="text" name="skillDescription" className="form-control" placeholder="Skill Description" value={skill} />
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </form>
                                <div className="form-row d-flex flex-row-reverse">
                                    <button type="button" name="save" className="btn saveButton" value="save" onClick={this.handleEditSubmit.bind(this)}>Save</button>
                                </div>
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
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-4 col-form-label">Awards, Honors, and Honorary Mentions</label>
                                        <div className="col-sm-8">
                                            {
                                                awards.map(award => {
                                                    return (
                                                        <div className={`input-group ${classes.itemsGroup}`}>
                                                            <div className="input-group-prepend">
                                                                <button type="button" name="award" className="btn deleteButton" >-</button>
                                                            </div>
                                                            <input type="text" name="award" className="form-control" placeholder="Achievement Description" value={award} />
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </form>
                                <div className="form-row d-flex flex-row-reverse">
                                    <button type="button" name="save" className="btn saveButton" value="save" onClick={this.handleEditSubmit.bind(this)}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.buttonContainer}>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleEditSubmit}>Create my CV</button>
                </div>
            </div>
        );
    }
}