import React, { Component } from "react";

export default class Edit extends Component {
    render() {
        return (
            <div>
                <div id="accordion">

                    {/* PERSONAL INFORMATION Card */}
                    <div class="card">
                        <div class="card-header" id="personalInformationHeading">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapsePersonalInformation" aria-expanded="true" aria-controls="collapsePersonalInformation">
                                    Personal Information
                                </button>
                            </h5>
                        </div>

                        <div id="collapsePersonalInformation" class="collapse show" aria-labelledby="personalInformationHeading" data-parent="#accordion">
                            <div class="card-body">
                                <p>Personal Information Component goes here</p>
                            </div>
                        </div>
                    </div>

                    {/* EDUCATION Card */}
                    <div class="card">
                        <div class="card-header" id="educationHeading">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEducation" aria-expanded="false" aria-controls="collapseEducation">
                                    Education
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEducation" class="collapse" aria-labelledby="educationHeading" data-parent="#accordion">
                            <div class="card-body">
                                <p>Education Component goes here</p>
                            </div>
                        </div>
                    </div>

                    {/* ACHIEVEMENTS Card */}
                    <div class="card">
                        <div class="card-header" id="headingAchievements">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseAchievements" aria-expanded="false" aria-controls="collapseAchievements">
                                    Major Achievements
                                </button>
                            </h5>
                        </div>
                        <div id="collapseAchievements" class="collapse" aria-labelledby="headingAchievements" data-parent="#accordion">
                            <div class="card-body">
                                Major Achievements Component goes here
                            </div>
                        </div>
                    </div>

                    {/* SKILLS Card */}
                    <div class="card">
                        <div class="card-header" id="headingSkills">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSkills" aria-expanded="false" aria-controls="collapseSkills">
                                    Additional Skills
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSkills" class="collapse" aria-labelledby="headingSkills" data-parent="#accordion">
                            <div class="card-body">
                                <p>Additional Skills Component goes here</p>
                            </div>
                        </div>
                    </div>

                    {/* AWARDS, HONORS, AND HONORARY MENTIONS Card */}
                    <div class="card">
                        <div class="card-header" id="headingAwards">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseAwards" aria-expanded="false" aria-controls="collapseAwards">
                                    Awards, Honors, and Honorary Mentions
                                </button>
                            </h5>
                        </div>
                        <div id="collapseAwards" class="collapse" aria-labelledby="headingAwards" data-parent="#accordion">
                            <div class="card-body">
                                <p>Awards, Honors, and Honorary Mentions Component goes here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}