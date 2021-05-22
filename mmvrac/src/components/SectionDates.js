import React from 'react'

const SectionDates = () => {
    return (
        <div>
            <h1 className="mb-5">Important Dates</h1>
            <div className="container px-5 mb-1">
                <ul className="list-group px-5">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>20 May 2021</div>
                            <div className="fw-bold">
                                Registration for the Challenge Opens 
                                <a className="mx-2 btn btn-sm btn-primary" href="https://sutdcv.github.io/ICCV-2021-Workshop-Registration/" type="button">Register Here</a>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>9 June 2021</div>
                            <div className="fw-bold">Release of the Training Data</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>13 June 2021</div>
                            <div className="fw-bold">Release of the Testing Data</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>25 June 2021</div>
                            <div className="fw-bold">Submission / Evaluation Opens</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>5 July 2021</div>
                            <div className="fw-bold">Submission / Evaluation Closes and Registration Closes</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>8 July 2021</div>
                            <div className="fw-bold">Release of Results and Winners</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="container mx-4 my-4 fs-6 fst-italic">You could also join the <a href="https://groups.google.com/u/1/g/mmvrac-iccv2021w"> Google Group</a> to get the latest updates.</div>
        </div>
    )
}

export default SectionDates
