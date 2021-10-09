import React from 'react'

const SectionSchedule = () => {

    // const dateObj = new Date();
    const options_montreal = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZoneName: 'short', timeZone: "America/Montreal"}
    const options_singapore = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZoneName: 'short', timeZone: "Asia/Singapore"}
    const options_local = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZoneName: 'short'}

    const time_montreal = {hour: '2-digit', minute: '2-digit', hour12: true, timeZone: "America/Montreal"}
    const time_singapore = {hour: '2-digit', minute: '2-digit', hour12: true, timeZone: "Asia/Singapore"}
    const time_local = {hour: '2-digit', minute: '2-digit', hour12: true}

    const date0 = new Date(Date.UTC(2021, 9, 11, 11, 0, 0));
    const date1 = new Date(Date.UTC(2021, 9, 11, 11, 20, 0));
    const date2 = new Date(Date.UTC(2021, 9, 11, 11, 50, 0));
    const date3 = new Date(Date.UTC(2021, 9, 11, 12, 20, 0));
    // const date4 = new Date(Date.UTC(2021, 9, 11, 13, 20, 0));
    const date5 = new Date(Date.UTC(2021, 9, 11, 12, 30, 0));


    const timeA = new Date(Date.UTC(2021, 9, 11, 12, 50, 0));
    const timeB = new Date(Date.UTC(2021, 9, 11, 13, 10, 0));
    const timeC = new Date(Date.UTC(2021, 9, 11, 13, 30, 0));
    const timeD = new Date(Date.UTC(2021, 9, 11, 13, 50, 0));
    const timeE = new Date(Date.UTC(2021, 9, 11, 14, 20, 0));
    const timeF = new Date(Date.UTC(2021, 9, 11, 14, 30, 0));


    return (
        <div>
            <h1 className="mb-3">Workshop Schedule</h1>

            <div className="alert alert-info">
                <b>Update:</b> Workshop will be hosted virtually on ZOOM: <a href="https://us06web.zoom.us/j/83221837096?pwd=V0p4aTNHQ1dnTWswZVBDb1JKemtqZz09" target="_blank" rel="noopener noreferrer" className="fst-italic"><u>Join the Zoom meeting here!</u></a>
            </div>


            <p className="mb-3">The workshop session will be organized on (color-coded for different time zones)
                {/* <span className="fw-bold"> {date0.toLocaleString("en-GB", options_montreal)} (Montreal Time)</span> / 
                <span className="mx-1 fw-bold text-info badge bg-dark"> {date0.toLocaleString("en-GB", options_singapore)} (Singapore Time)</span> */}
            </p>

            <ul>
                <li>
                    <span className="fw-bold">{date0.toLocaleTimeString("en-GB", time_montreal)} ~ {timeF.toLocaleTimeString("en-GB", time_montreal)}, {date0.toLocaleString("en-GB", options_montreal)}</span> <span className="ms-2 fst-italic text-light badge bg-success">EDT / Montreal Time</span>  
                </li>
                <li>
                    <span className="fw-bold">{date0.toLocaleTimeString("en-GB", time_singapore)} ~ {timeF.toLocaleTimeString("en-GB", time_singapore)}, {date0.toLocaleString("en-GB", options_singapore)}</span> <span className="ms-1 fst-italic text-info badge bg-dark">SGT / Singapore / Beijing Time</span> 
                </li>
                <li>
                    <span className="fw-bold">{date0.toLocaleTimeString("en-GB", time_singapore)} ~ {timeF.toLocaleTimeString("en-GB", time_singapore)}, {date0.toLocaleString("en-GB", options_local)}</span> <span className="ms-1 fst-italic text-light badge bg-secondary">Your system's local time</span> 
                </li>
            </ul>

            <div className="container px-5">
                <ul className="list-group px-5">

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{date0.toLocaleTimeString("en-GB", time_montreal)} ~ {date1.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date0.toLocaleTimeString("en-GB", time_singapore)} ~ {date1.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{date0.toLocaleTimeString("en-GB", time_local)} ~ {date1.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">Welcome Session</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{date1.toLocaleTimeString("en-GB", time_montreal)} ~ {date2.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date1.toLocaleTimeString("en-GB", time_singapore)} ~ {date2.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{date1.toLocaleTimeString("en-GB", time_local)} ~ {date2.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">Invited Talk 1</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{date2.toLocaleTimeString("en-GB", time_montreal)} ~ {date3.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date2.toLocaleTimeString("en-GB", time_singapore)} ~ {date3.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{date2.toLocaleTimeString("en-GB", time_local)} ~ {date3.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">Invited Talk 2</div>
                        </div>
                    </li>

                    {/* <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{date3.toLocaleTimeString("en-GB", time_montreal)} ~ {date4.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date3.toLocaleTimeString("en-GB", time_singapore)} ~ {date4.toLocaleTimeString("en-GB", time_singapore)}</span>
                            </div>
                            <div className="fw-bold">Invited Talk 3</div>
                        </div>
                    </li> */}

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{date3.toLocaleTimeString("en-GB", time_montreal)} ~ {date5.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date3.toLocaleTimeString("en-GB", time_singapore)} ~ {date5.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{date3.toLocaleTimeString("en-GB", time_local)} ~ {date5.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">Break</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{date5.toLocaleTimeString("en-GB", time_montreal)} ~ {timeA.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date5.toLocaleTimeString("en-GB", time_singapore)} ~ {timeA.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{date5.toLocaleTimeString("en-GB", time_local)} ~ {timeA.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">
                                Track-1 Winner Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{timeA.toLocaleTimeString("en-GB", time_montreal)} ~ {timeB.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeA.toLocaleTimeString("en-GB", time_singapore)} ~ {timeB.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{timeA.toLocaleTimeString("en-GB", time_local)} ~ {timeB.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">
                                Track-2 Winner Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{timeB.toLocaleTimeString("en-GB", time_montreal)} ~ {timeC.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeB.toLocaleTimeString("en-GB", time_singapore)} ~ {timeC.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{timeB.toLocaleTimeString("en-GB", time_local)} ~ {timeC.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">
                                Track-3 Winner Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{timeC.toLocaleTimeString("en-GB", time_montreal)} ~ {timeD.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeC.toLocaleTimeString("en-GB", time_singapore)} ~ {timeD.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{timeC.toLocaleTimeString("en-GB", time_local)} ~ {timeD.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">
                                Track-4 Winner Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{timeD.toLocaleTimeString("en-GB", time_montreal)} ~ {timeE.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeD.toLocaleTimeString("en-GB", time_singapore)} ~ {timeE.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{timeD.toLocaleTimeString("en-GB", time_local)} ~ {timeE.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            {/* <div className="fw-bold">
                                Runner-ups Presentation
                            </div> */}
                            <div className="fw-bold">Closing Remarks</div>
                        </div>
                    </li>

                    {/* <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic text-light badge bg-success">{timeE.toLocaleTimeString("en-GB", time_montreal)} ~ {timeF.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeE.toLocaleTimeString("en-GB", time_singapore)} ~ {timeF.toLocaleTimeString("en-GB", time_singapore)}</span> /
                                <span className="mx-1 fst-italic text-light badge bg-secondary">{timeE.toLocaleTimeString("en-GB", time_local)} ~ {timeF.toLocaleTimeString("en-GB", time_local)}</span>
                            </div>
                            <div className="fw-bold">Closing Remarks</div>
                        </div>
                    </li> */}

                </ul>
            </div>
        </div>
    )
}

export default SectionSchedule
