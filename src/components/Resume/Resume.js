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
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>Education</p>

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
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>Major Achievements</p>

                    <hr />

                    <div>
                        <p style={{ fontWeight: "bold" }}>Yearbook Club</p>
                        <p style={{ fontStyle: "italic" }}>Yearbook Design: Team Lead</p>

                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</span>
                            </li>
                            <li>
                                <span>et quasi architecto beatae vitae dicta sunt explicabo</span>
                            </li>
                            <li>
                                <span>dolores eos qui ratione voluptatem sequi nesciunt. Neque porro</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p style={{ fontWeight: "bold" }}>Santa Monica Newspaper</p>
                        <p style={{ fontStyle: "italic" }}>Graphic Designer</p>

                        <ul style={{ listStyleType: "square" }}>
                            <li>
                                <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem </span>
                            </li>
                            <li>
                                <span>et quasi architecto beatae vitae dicta sunt explicabo</span>
                            </li>
                            <li>
                                <span>dolores eos qui ratione voluptatem sequi nesciunt. Neque porro</span>
                            </li>
                            <li>
                                <span>adipisci velit, sed quia non numquam eius</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Additional Skills */}
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>Additional Skills</p>

                    <hr />

                    <ul style={{ listStyleType: "square" }}>
                        <li>
                            <span>Proficient in Photoshop and Adobe Creative Suite</span>
                        </li>
                        <li>
                            <span>Basic knowledge of HTML</span>
                        </li>
                        <li>
                            <span>Basic knowledge of Adobe Dreamweaver</span>
                        </li>
                        <li>
                            <span>Keen eye for aesthetics with good understanding of image gradients</span>
                        </li>
                        <li>
                            <span>Intermediate speaking level in spanish</span>
                        </li>
                    </ul>
                </div>

                {/* Awards, Honors, and Honorary Mentions */}
                <div>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>Awards, Honors, and Honorary Mentions</p>

                    <hr />

                    <ul style={{ listStyleType: "square" }}>
                        <li>
                            <span>Nominated for Macmillan Prize for Illustration in 2016</span>
                        </li>
                        <li>
                            <span>Submitted artwork to Ocean Awareness Student Art Contest 2016</span>
                        </li>
                        <li>
                            <span>Came in 2nd place in the Applied Arts 2016 Student Awards for submitting graphic design work under the category of Advertising</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );

}