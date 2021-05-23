import React from 'react'
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const SectionIntro = () => {
    return (
        <div>
            <h1 className="mb-5">Introduction</h1>

            <p className="mb-3">
                To promote the research development in the multi-modal video understanding area, we organize the first ICCV workshop competition on Multi-Modal Video Reasoning and Analyzing. In this competition, we have 4 tracks for you to participate in:
            </p>
            <div className="container">
                <ul>
                    <li className="my-2">
                        <b>Track-1 Video Question Answering </b>

                        based on the dataset <a href="https://sutdcv.github.io/multi-modal-video-reasoning/#/datasets">SUTD-TrafficQA</a>, which is a comprehensive VideoQA benchmark
                        focusing on traffic-event based video reasoning.
                        
                    </li>
                    <li className="my-2">
                        <b>Track-2 Skeleton-based Action Recognition </b>
                        based on <a href="https://sutdcv.github.io/multi-modal-video-reasoning/#/datasets">UAV-Human</a>, which is a comprehensive and challenging human
                        behavior understanding dataset captured by a Unmanned Aerial Vehicle.
                    </li>
                    <li className="my-2">
                        <b>Track-3 Fisheye Video-based Action Recognition </b >
                        based on <a href="https://sutdcv.github.io/multi-modal-video-reasoning/#/datasets">UAV-Human</a>, which also provides video samples
                        recorded by a fisheye camera, captures wide
                        angle of views yet brings challenges because of large
                        distortions in the edge areas. 
                    </li>
                    <li className="my-2">
                        <b>Track-4 Person Re-Identification </b>
                        based on <a href="https://sutdcv.github.io/multi-modal-video-reasoning/#/datasets">UAV-Human</a>, which also provides a person ReID track
                        with 11,805 frames containing 618 identities, with
                        diversified viewpoints, scenarios and occlusions.
                    </li>
                </ul>
            </div>
            <Button
                href="https://sutdcv.github.io/multi-modal-video-reasoning/#/datasets"
                variant="outlined"
                color="primary"
                className=""
                endIcon={<ArrowRightIcon />}
            >
                Learn More about datasets and tracks
            </Button>
            
        </div>
    )
}

export default SectionIntro
