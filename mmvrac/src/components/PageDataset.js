import React from 'react'

const PageDataset = () => {
    return (
        <div>
            <main role="main">
                <div className="jumbotron jumbotron-fluid py-5 bg-dark">
                    <div className="container">
                        <h1 className="display-3">
                            Datasets & Tracks
                        </h1>
                        {/* <p className="lead mt-3 mb-1 text-white">
                            - Datasets download link will be sent to registered participant's email address on the training-data-release date.

                        </p> */}
                        {/* <p className="lead text-white">- The top teams in each track will be invited to the ICCV 2021 Workshop session to present their works.</p> */}
                    </div>
                </div>

                <div className="container marketing mt-5">
                    <div className="column mb-4">
                        <p className="mx-1 my-1 badge rounded-pill bg-secondary fs-6">Track-1 Video Question Answering</p>
                        <p className="container">Video question answering, which aims at answering question about the video content, has emerged as an important research topic among vision-and-language tasks, since to accurately answer the question, models need to perform spatio-temporal, logical reasoning over the video content. Such video reasoning capability lies in the core of Artificial Intelligence study. However, the video reasoning capability of intelligent models is less explored in existing benchmarks for video question answering.</p>
                    </div>
                    <div className="row featurette">


                        <div className="col-md-7">
                            <h2 className="featurette-heading">SUTD-TrafficQA</h2>
                            <p className="lead">
                                TrafficQA (Traffic Question Answering) takes the
                                form of video QA based on the collected 10,080
                                in-the-wild videos and annotated 62,535 QA pairs,
                                for benchmarking the cognitive capability of causal
                                inference and event understanding models in complex
                                traffic scenarios. The dataset includes 6
                                challenging reasoning tasks corresponding to various
                                traffic scenarios, to evaluate the reasoning
                                capability over different kinds of complex yet
                                practical traffic events.
                            </p>
                            <a
                                href="https://arxiv.org/abs/2103.15538"
                                className="me-2 px-3 btn btn-outline-dark"
                                target="_blank"
                                id="social"
                                rel="noopener noreferrer"
                                >Paper</a>
                            <a
                                href="https://sutdcv.github.io/SUTD-TrafficQA/"
                                className="me-2 px-3 btn btn-outline-dark"
                                target="_blank"
                                id="social"
                                rel="noopener noreferrer"
                                >Dataset</a>
                        </div>
                        <div className="col-md-5">
                            <img
                                className="
                                    bd-placeholder-img bd-placeholder-img-lg
                                    featurette-image
                                    img-fluid
                                    mx-auto
                                "
                                width="500"
                                height="500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                                src="imgs/tqa.png"
                                alt="SUTD-TrafficQA"
                            />
                        </div>
                    </div>

                    <hr className="featurette-divider" />
                    <div className="column mb-4">
                        <p className="mx-1 my-1 badge rounded-pill bg-secondary fs-6">Track-2 Skeleton-based Action Recognition</p>
                        <p className="container">Skeleton-based action recognition which aims to recognize human behaviors given skeletal data has been attracting more and more attentions, as skeletons are concise and powerful representations for human behaviors. However, existing works lack viewpoints from the UAV perspectives, which are important in many real-world application scenarios, such as catastrophe rescue, city surveillance and wild patrol. These are some situations where humans are out of reach but monitoring and understanding humans' behaviors are highly demanded.</p>
                        <p className="mx-1 my-1 badge rounded-pill bg-secondary fs-6">Track-3 Fisheye Video-based Action Recognition</p>
                        <p className="container">Fisheye-based action recognition aims to recognize action labels given videos captured by an ultra wide-angle camera. The ultra wide-angle fisheye camera is able to perceive broad views, which is significant in many practical UAV working environments. Moreover, recognizing human actions in the fisheye videos is also very challenging, since large distortions always exist in the edge areas.</p>
                        <p className="mx-1 my-1 badge rounded-pill bg-secondary fs-6">Track-4 Person Re-Identification</p>
                        <p className="container">Person re-identification aiming to retrieve images containing the person of interest across different cameras when given a query person image, is an important yet challenging human behavior understanding task. The person re-identification task under a flying UAV is even more challenging due to the variations of viewpoints and resolutions, complex backgrounds and occlusions brought by the different attitudes of the flying UAV.</p>
                    </div>

                    <div className="row featurette">


                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">UAV-Human</h2>
                            <p className="lead">
                                UAVHuman contains 67,428 multi-modal video sequences
                                and 119 subjects for action recognition, 22,476
                                frames for pose estimation, 41,290 frames and 1,144
                                identities for person re-identification, and 22,263
                                frames for attribute recognition. The dataset was
                                collected by a flying UAV in multiple urban and
                                rural districts in both daytime and nighttime over
                                three months, hence covering extensive diversities
                                w.r.t subjects, backgrounds, illuminations,
                                weathers, occlusions, camera motions, and UAV flying
                                attitudes.
                            </p>
                            <a
                                href="https://arxiv.org/abs/2104.00946"
                                className="me-2 px-3 btn btn-outline-dark"
                                target="_blank"
                                id="social"
                                rel="noopener noreferrer"
                                >Paper</a>
                            <a
                                href="https://github.com/SUTDCV/UAV-Human"
                                className="me-2 px-3 btn btn-outline-dark"
                                target="_blank"
                                id="social"
                                rel="noopener noreferrer"
                                >Dataset</a>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img
                                className="
                                    bd-placeholder-img bd-placeholder-img-lg
                                    featurette-image
                                    img-fluid
                                    mx-auto
                                "
                                width="500"
                                height="500"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                                src="imgs/uav.png"
                                alt="UAV-Human"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PageDataset
