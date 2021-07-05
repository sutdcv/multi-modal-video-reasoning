import React from 'react'

const SectionDates = () => {
    
    const dateObj = new Date();
    const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short'}
    const date1 = new Date(Date.UTC(2021, 4, 20, 15, 0, 0));
    const date2 = new Date(Date.UTC(2021, 5, 9, 15, 0, 0));
    const date3 = new Date(Date.UTC(2021, 5, 13, 15, 0, 0));
    const date4 = new Date(Date.UTC(2021, 5, 25, 15, 0, 0));
    const date5 = new Date(Date.UTC(2021, 6, 5, 15, 0, 0));
    const date6 = new Date(Date.UTC(2021, 6, 8, 15, 0, 0));

    const registerIsOpen = () => {
        if (date1 <= dateObj && dateObj <= date4) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div>
            <h1 className="mb-5">Important Dates</h1>
            <div className="container px-5 mb-1">
                <ul className="list-group px-5">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fst-italic text-muted">{date1.toLocaleTimeString("en-GB", options)}</div>
                            <div className="fw-bold text-decoration-line-through">
                                Registration for the Challenge Opens
                                <a 
                                className={"mx-2 btn btn-sm " + (registerIsOpen()?"btn-primary":"btn-secondary disabled")} 
                                href="https://sutdcv.github.io/ICCV-2021-Workshop-Registration/" 
                                type="button">
                                    Register Here
                                </a>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fst-italic text-muted">{date2.toLocaleTimeString("en-GB", options)}</div>
                            <div className="fw-bold text-decoration-line-through">Release of the Training Data</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fst-italic text-muted">{date3.toLocaleTimeString("en-GB", options)}</div>
                            <div className="fw-bold text-decoration-line-through">Release of the Testing Data</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fst-italic text-muted">{date4.toLocaleTimeString("en-GB", options)}</div>
                            <div className="fw-bold text-decoration-line-through">Submission / Evaluation Opens and Registration Closes</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fst-italic text-muted">{date5.toLocaleTimeString("en-GB", options)}</div>
                            <div className="fw-bold text-decoration-line-through">Submission / Evaluation Closes</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fst-italic text-muted">{date6.toLocaleTimeString("en-GB", options)}</div>
                            <div className="fw-bold">Release of Results and Winners</div>
                        </div>
                    </li>
                </ul>
            </div>
            {/* <div className="container mx-4 my-4 fs-6 fst-italic">You could also join the <a href="https://groups.google.com/u/1/g/mmvrac-iccv2021w"> Google Group</a> to get the latest updates.</div> */}
        </div>
    )
}

export default SectionDates
