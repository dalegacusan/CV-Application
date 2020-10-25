import React from "react";
import classes from "./styles/Resume.module.css";

export default function Resume({ state }) {

    const { personalInfo, education, achievements, skills, awards } = state;

    const { name, mobileNo, email, website, location, personalDescription } = personalInfo;

    return (

        <div style={{ margin: "24px" }}>
            <p>Enjoy Your Resume!</p>
            <div className={classes.resumeContainer}>

                {/* Header */}
                <div>
                    <div class="row">
                        <div class="col">
                            <p style={{ fontWeight: "bold" }}>{name}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="d-flex justify-content-between">
                                <p>{email}</p>
                                <p>{mobileNo}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="d-flex justify-content-between">
                                <p>{location}</p>
                                <p>{website}</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <p style={{ textAlign: "justify" }}>{personalDescription}</p>
                </div>

                {/* Education */}
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>EDUCATION</p>

                    <hr />

                    {
                        education.map(school => {
                            const { schoolName, status, courseworks, honors, clubs } = school;
                            const courseworksList = courseworks.join(', ');
                            const honorsList = honors.join(', ');
                            const clubsList = clubs.join(', ');

                            return (
                                <div>
                                    <p style={{ fontWeight: "bold" }}>{schoolName}</p>
                                    <p style={{ fontStyle: "italic" }}>{status}</p>

                                    <div>
                                        <span style={{ fontWeight: "bold" }}>Relevant Coursework: </span>
                                        <span>{courseworksList}</span>
                                    </div>

                                    <div>
                                        <span style={{ fontWeight: "bold" }}>Honors: </span>
                                        <span>{honorsList}</span>
                                    </div>

                                    <div>
                                        <span style={{ fontWeight: "bold" }}>Clubs: </span>
                                        <span>{clubsList}</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                {/* Major Achievements */}
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>MAJOR ACHIEVEMENTS</p>

                    <hr />

                    {
                        achievements.map(achievement => {
                            const { companyName, position, contributions } = achievement;

                            return (
                                <div>
                                    <p style={{ fontWeight: "bold" }}>{companyName}</p>
                                    <p style={{ fontStyle: "italic" }}>{position}</p>

                                    <ul style={{ listStyleType: "square" }}>
                                        {
                                            contributions.map(contribution => {
                                                return (
                                                    <li>
                                                        <span>{contribution}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                            )
                        })
                    }
                </div>

                {/* Additional Skills */}
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>ADDITIONAL SKILLS</p>

                    <hr />

                    <ul style={{ listStyleType: "square" }}>
                        {
                            skills.map(skill => {
                                return (
                                    <li>
                                        <span>{skill}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* Awards, Honors, and Honorary Mentions */}
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>AWARDS, HONORS, AND HONORARY MENTIONS</p>

                    <hr />

                    <ul style={{ listStyleType: "square" }}>
                        {
                            awards.map(award => {
                                return (
                                    <li>
                                        <span>{award}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </div>
    );

}