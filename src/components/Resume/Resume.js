import React from "react";
import classes from "./styles/Resume.module.css";
import { Helmet } from "react-helmet";

export default function Resume({ state }) {

    const { personalInfo, education, achievements, skills, awards } = state;

    const { name, mobileNo, email, website, location, personalDescription } = personalInfo;

    const makeArray = (array) => {
        const newArray = [];
        for (let item of array) {
            newArray.push(item.text);
        }

        return newArray.join(', ');
    }

    return (

        <div className={classes.resumeWrapper}>
            <Helmet>
                <style>
                    {'body { color: rgb(211, 211, 211); background: rgb(8,8,8); background: linear-gradient(190deg, rgba(8,8,8,1) 0%, rgba(48,48,48,1) 100%); background-attachment:fixed; height:100%; }'}
                </style>
            </Helmet>


            <div className={classes.resumeContainer}>

                {/* Header */}
                <div className={classes.resumeSection}>
                    <div style={{ borderBottom: "3px solid rgb(145, 145, 145", paddingBottom: "4px", marginBottom: "14px" }}>

                        <div className="row">
                            <div className="col">
                                <p className={classes.bold + ' ' + classes.personName}>{name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="d-flex justify-content-between">
                                    <p>{email}</p>
                                    <p>{mobileNo}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="d-flex justify-content-between">
                                    <p>{location}</p>
                                    <p>{website}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <p style={{ textAlign: "justify" }}>{personalDescription}</p>
                </div>

                {/* Education */}
                <div className={classes.resumeSection}>
                    <p className={classes.sectionHeader}>EDUCATION</p>

                    <div className={classes.sectionBody}>
                        {
                            education.map(school => {
                                const { schoolName, status, courseworks, honors, clubs } = school;

                                return (
                                    <div className={classes.sectionContent}>
                                        <p className={classes.bold}>{schoolName}</p>
                                        <p style={{ fontStyle: "italic" }}>{status}</p>

                                        <div>
                                            <span className={classes.bold}>Relevant Coursework: </span>
                                            {makeArray(courseworks)}
                                        </div>

                                        <div>
                                            <span className={classes.bold}>Honors: </span>
                                            {makeArray(honors)}
                                        </div>

                                        <div>
                                            <span className={classes.bold}>Clubs: </span>
                                            {makeArray(clubs)}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                {/* Major Achievements */}
                <div className={classes.resumeSection}>
                    <p className={classes.sectionHeader}>MAJOR ACHIEVEMENTS</p>

                    <div className={classes.sectionBody}>
                        {
                            achievements.map(achievement => {
                                const { companyName, position, contributions } = achievement;

                                return (
                                    <div>
                                        <p className={classes.bold}>{companyName}</p>
                                        <p style={{ fontStyle: "italic" }}>{position}</p>

                                        <ul style={{ listStyleType: "square" }}>
                                            {
                                                contributions.map(contribution => {
                                                    return (
                                                        <li>
                                                            <span>{contribution.text}</span>
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
                </div>

                {/* Additional Skills */}
                <div className={classes.resumeSection}>
                    <p className={classes.sectionHeader}>ADDITIONAL SKILLS</p>

                    <div className={classes.sectionBody}>
                        <ul style={{ listStyleType: "square" }}>
                            {
                                skills.map(skill => {
                                    return (
                                        <li>
                                            <span>{skill.text}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {/* Awards, Honors, and Honorary Mentions */}
                <div className={classes.resumeSection}>
                    <p className={classes.sectionHeader}>AWARDS, HONORS, AND HONORARY MENTIONS</p>

                    <div className={classes.sectionBody}>
                        <ul style={{ listStyleType: "square" }}>
                            {
                                awards.map(award => {
                                    return (
                                        <li>
                                            <span>{award.text}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>

            <div className={classes.wrapperFooter}>
                <p>Source code can be found at <a href="https://github.com/dalegacusan/CV-Application" target="_blank">GitHub</a></p>
            </div>

        </div>
    );

}