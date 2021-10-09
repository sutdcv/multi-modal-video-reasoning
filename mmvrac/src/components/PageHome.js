import React from 'react'
import SectionIntro from "./SectionIntro"
import SectionDates from "./SectionDates"
import SectionOrganizers from "./SectionOrganizers"
import SectionContributors from "./SectionContributors"
import SectionSpeakers from "./SectionSpeakers"
import SectionSchedule from "./SectionSchedule"


const PageHome = () => {
    return (
        <div>
            <main role="main">
                <div className="jumbotron jumbotron-fluid py-5 bg-dark">
                    <div className="container">
                        <h1 className="display-3">
                            Multi-Modal Video Reasoning and Analyzing Competition
                        </h1>
                        <p className="lead"><strong>ICCV 2021 Workshop</strong></p>
                    </div>
                </div>
                <div className="mt-5 container marketing">
                    <SectionIntro />
                    <hr className="featurette-divider" />
                    <SectionSpeakers />
                    <hr className="featurette-divider" />
                    <SectionSchedule />
                    <hr className="featurette-divider" />
                    <SectionDates />
                    <hr className="featurette-divider" />
                    <SectionOrganizers />
                    <hr className="featurette-divider" />
                    <SectionContributors />
                </div>
            </main>
        </div>
    )
}

export default PageHome
