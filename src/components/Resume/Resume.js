import React from "react";
import classes from "./styles/Resume.module.css";
import { Helmet } from "react-helmet";

export default function Resume({ state }) {

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
                status: 'Graduate',
                courseworks: ["Intro to Graphic Design", "AP Art", "Yearbook", "Computer Applications"],
                honors: ["Member of the National Honors Society and National Art Education Association"],
                clubs: ["Yearbook Club", "Santa Monica Newspaper", "Spanish Club"],
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

    const { personalInfo, education, achievements, skills, awards } = mockState;

    const { name, mobileNo, email, website, location, personalDescription } = personalInfo;

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
                                const courseworksList = courseworks.join(', ');
                                const honorsList = honors.join(', ');
                                const clubsList = clubs.join(', ');

                                return (
                                    <div>
                                        <p className={classes.bold}>{schoolName}</p>
                                        <p style={{ fontStyle: "italic" }}>{status}</p>

                                        <div>
                                            <span className={classes.bold}>Relevant Coursework: </span>
                                            <span>{courseworksList}</span>
                                        </div>

                                        <div>
                                            <span className={classes.bold}>Honors: </span>
                                            <span>{honorsList}</span>
                                        </div>

                                        <div>
                                            <span className={classes.bold}>Clubs: </span>
                                            <span>{clubsList}</span>
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
                                            <span>{skill}</span>
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
                                            <span>{award}</span>
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