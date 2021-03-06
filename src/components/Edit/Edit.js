import React, { Component } from "react";
import classes from "./Edit.module.css";
import { handleDelete } from "../../HelperFunctions/componentFormHandler";

export default class Edit extends Component {

    // Save Button Function (maybe collapse the card?)

    handleDelete = (e, newState) => {
            this.props.handleInformationSubmit(e, "edit", newState);
    }

    handleSaveClick = () => {
        this.setState({ hideCard: true });
    }

    handleCardClick = () => {
        this.setState({ hideCard: false });
    }

    render() {

        const { handleInputChange, state } = this.props;
        const { personalInfo, education, achievements, skills, awards } = state;
        const { name, mobileNo, email, website, location, personalDescription } = personalInfo;

        return (
            <div>
                <div id="accordion">
                    {/* PERSONAL INFORMATION Card */}
                    <div className={`card ${classes.componentCard}`}>
                        <div className={`card-header ${classes.cardHeader}`} id="personalInformationHeading">
                            <h5 className="mb-0">
                                <button className={`btn btn-link collapsed ${classes.toggleButton}`} data-toggle="collapse" data-target="#collapsePersonalInformation" aria-expanded="true" aria-controls="collapsePersonalInformation">
                                <i className={`fas fa-user ${classes.icon}`}></i>Personal Information
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
                                        <button type="button" name="save" className="btn saveButton" value="Save" onClick={this.handleSaveClick}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* EDUCATION Card */}
                    <div className={`card ${classes.componentCard}`}>
                        <div className={`card-header ${classes.cardHeader}`} id="educationHeading">
                            <h5 className="mb-0">
                                <button className={`btn btn-link collapsed ${classes.toggleButton}`} data-toggle="collapse" data-target="#collapseEducation" aria-expanded="false" aria-controls="collapseEducation">
                                <i className="fas fa-graduation-cap"></i>Education
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEducation" className="collapse" aria-labelledby="educationHeading" data-parent="#accordion">
                            <div className="card-body">
                                <form>
                                    {
                                        education.map((school, key) => {
                                            const { clubs, courseworks, honors, schoolName, status } = school;
                                            return (
                                                <div key={key} className={classes.arrayGroup}>
                                                    {/* SCHOOL NAME */}
                                                    <div className="form-group row">
                                                        <label htmlFor="inputSchoolName" className="col-sm-3 col-form-label">School Name: </label>
                                                        <div className="col-sm-9">
                                                            <input type="text" name="schoolName" value={schoolName} className="form-control" id="inputSchoolName" placeholder="School Name" onChange={(e) => handleInputChange(e, "education", school.id)} />
                                                        </div>
                                                    </div>
                                                    {/* STATUS */}
                                                    <div className="form-group row">
                                                        <label htmlFor="inputSchoolStatus" className="col-sm-3 col-form-label">Status: </label>
                                                        <div className="col-sm-9">
                                                            <select className="form-control" name="status" value={status} id="inputSchoolStatus" onChange={(e) => handleInputChange(e, "education", school.id)}>
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
                                                                courseworks.map((coursework, key) => {
                                                                    return (
                                                                        <div key={key} className={`input-group ${classes.itemsGroup}`}>
                                                                            <div className="input-group-prepend">
                                                                                <button type="button" name="education" value="courseworks" className="btn deleteButton" onClick={(e) => handleDelete(e, this, coursework.id)}>-</button>
                                                                            </div>
                                                                            <input type="text" name="coursework" className="form-control" placeholder="Relevant Coursework" value={coursework.text} onChange={(e) => handleInputChange(e, "education", coursework.id)} />
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
                                                                honors.map((honor, key) => {
                                                                    return (
                                                                        <div key={key} className={`input-group ${classes.itemsGroup}`}>
                                                                            <div className="input-group-prepend">
                                                                                <button type="button" name="education" value="honors" className="btn deleteButton" onClick={(e) => handleDelete(e, this, honor.id)}>-</button>
                                                                            </div>
                                                                            <input type="text" name="honor" className="form-control" placeholder="Honors" value={honor.text} onChange={(e) => handleInputChange(e, "education", honor.id)} />
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
                                                                clubs.map((club, key) => {
                                                                    return (
                                                                        <div key={key} className={`input-group ${classes.itemsGroup}`}>
                                                                            <div className="input-group-prepend">
                                                                                <button type="button" name="education" value="clubs" className="btn deleteButton" onClick={(e) => handleDelete(e, this, club.id)}>-</button>
                                                                            </div>
                                                                            <input type="text" name="club" className="form-control" placeholder="Clubs" value={club.text} onChange={(e) => handleInputChange(e, "education", club.id)} />
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
                                        <button type="button" name="save" className="btn saveButton" value="save" onClick={this.handleSaveClick}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* ACHIEVEMENTS Card */}
                    <div className={`card ${classes.componentCard}`}>
                        <div className={`card-header ${classes.cardHeader}`} id="headingAchievements">
                            <h5 className="mb-0">
                                <button className={`btn btn-link collapsed ${classes.toggleButton}`} data-toggle="collapse" data-target="#collapseAchievements" aria-expanded="false" aria-controls="collapseAchievements">
                                <i className="fas fa-award"></i>Major Achievements
                                </button>
                            </h5>
                        </div>
                        <div id="collapseAchievements" className="collapse" aria-labelledby="headingAchievements" data-parent="#accordion">
                            <div className="card-body">
                                <form>
                                    {
                                        achievements.map((achievement, key) => {
                                            const { companyName, position, contributions } = achievement;
                                            return (
                                                <div key={key} className={classes.arrayGroup}>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputCompanyName" className="col-sm-4 col-form-label">Company/Organization Name</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" name="companyName" value={companyName} className="form-control" id="inputCompanyName" placeholder="Company/Organization Name" onChange={(e) => handleInputChange(e, "achievements", achievement.id)} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="inputPosition" className="col-sm-4 col-form-label">Position/Role</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" name="position" value={position} className="form-control" id="inputPosition" placeholder="Position" onChange={(e) => handleInputChange(e, "achievements", achievement.id)} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Contributions</label>
                                                        <div className="col-sm-8">
                                                            {
                                                                contributions.map((contribution, key) => {
                                                                    return (
                                                                        <div key={key} className={`input-group ${classes.itemsGroup}`}>
                                                                            <div className="input-group-prepend">
                                                                                <button type="button" name="achievements" value="contributions" className="btn deleteButton" onClick={(e) => handleDelete(e, this, contribution.id)}>-</button>
                                                                            </div>
                                                                            <input type="text" name="contribution" className="form-control" placeholder="Honors" value={contribution.text} onChange={(e) => handleInputChange(e, "achievements", contribution.id)} />
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
                                        <button type="button" name="save" className="btn saveButton" value="save" onClick={this.handleSaveClick}>Save</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                    {/* SKILLS Card */}
                    <div className={`card ${classes.componentCard}`}>
                        <div className={`card-header ${classes.cardHeader}`} id="headingSkills">
                            <h5 className="mb-0">
                                <button className={`btn btn-link collapsed ${classes.toggleButton}`} data-toggle="collapse" data-target="#collapseSkills" aria-expanded="false" aria-controls="collapseSkills">
                                <i className="fas fa-running"></i>Additional Skills
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
                                                skills.map((skill, key) => {
                                                    return (
                                                        <div key={key} className={`input-group ${classes.itemsGroup}`}>
                                                            <div className="input-group-prepend">
                                                                <button type="button" name="skills" className="btn deleteButton" onClick={(e) => handleDelete(e, this, skill.id)}>-</button>
                                                            </div>
                                                            <input type="text" name="skillDescription" className="form-control" placeholder="Skill Description" value={skill.text} onChange={(e) => handleInputChange(e, "skills", skill.id)} />
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </form>
                                <div className="form-row d-flex flex-row-reverse">
                                    <button type="button" name="save" className="btn saveButton" value="save" onClick={this.handleSaveClick}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AWARDS, HONORS, AND HONORARY MENTIONS Card */}
                    <div className={`card ${classes.componentCard}`}>
                        <div className={`card-header ${classes.cardHeader}`} id="headingAwards">
                            <h5 className="mb-0">
                                <button className={`btn btn-link collapsed ${classes.toggleButton}`} data-toggle="collapse" data-target="#collapseAwards" aria-expanded="false" aria-controls="collapseAwards">
                                <i className="fas fa-trophy"></i>Awards, Honors, and Honorary Mentions
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
                                                awards.map((award, key) => {
                                                    return (
                                                        <div key={key} className={`input-group ${classes.itemsGroup}`}>
                                                            <div className="input-group-prepend">
                                                                <button type="button" name="awards" className="btn deleteButton" onClick={(e) => handleDelete(e, this, award.id)}>-</button>
                                                            </div>
                                                            <input type="text" name="award" className="form-control" placeholder="Achievement Description" value={award.text} onChange={(e) => handleInputChange(e, "awards", award.id)} />
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </form>
                                <div className="form-row d-flex flex-row-reverse">
                                    <button type="button" name="save" className="btn saveButton" value="save" onClick={this.handleSaveClick}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.buttonContainer}>
                    <button type="button" className={`btn btn-primary btn-lg btn-block ${classes.createCVButton}`} onClick={this.props.handleInformationSubmit}>Create my CV</button>
                </div>
            </div>
        );
    }
}