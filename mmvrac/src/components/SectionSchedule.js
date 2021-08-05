import React from 'react'

const SectionSchedule = () => {

    // const dateObj = new Date();
    const options_montreal = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZoneName: 'short', timeZone: "America/Montreal"}
    const options_singapore = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZoneName: 'short', timeZone: "Asia/Singapore"}

    const time_montreal = {hour: '2-digit', minute: '2-digit', hour12: true, timeZone: "America/Montreal"}
    const time_singapore = {hour: '2-digit', minute: '2-digit', hour12: true, timeZone: "Asia/Singapore"}

    const date0 = new Date(Date.UTC(2021, 9, 11, 12, 0, 0));
    const date1 = new Date(Date.UTC(2021, 9, 11, 12, 20, 0));
    const date2 = new Date(Date.UTC(2021, 9, 11, 12, 40, 0));
    const date3 = new Date(Date.UTC(2021, 9, 11, 13, 0, 0));
    const date4 = new Date(Date.UTC(2021, 9, 11, 13, 20, 0));
    const date5 = new Date(Date.UTC(2021, 9, 11, 13, 30, 0));


    const timeA = new Date(Date.UTC(2021, 9, 11, 13, 50, 0));
    const timeB = new Date(Date.UTC(2021, 9, 11, 14, 10, 0));
    const timeC = new Date(Date.UTC(2021, 9, 11, 14, 30, 0));
    const timeD = new Date(Date.UTC(2021, 9, 11, 14, 50, 0));
    const timeE = new Date(Date.UTC(2021, 9, 11, 15, 20, 0));
    const timeF = new Date(Date.UTC(2021, 9, 11, 15, 30, 0));


    return (
        <div>
            <h1 className="mb-3">Workshop Schedule (TBC)</h1>

            <p className="mb-3">The workshop will be organized on 
                <span className="fw-bold"> {date0.toLocaleString("en-GB", options_montreal)} (Montreal Time)</span> / 
                <span className="mx-1 fw-bold text-info badge bg-dark"> {date0.toLocaleString("en-GB", options_singapore)} (Singapore Time)</span>
            </p>

            <div className="container px-5">
                <ul className="list-group px-5">

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{date0.toLocaleTimeString("en-GB", time_montreal)} ~ {date1.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date0.toLocaleTimeString("en-GB", time_singapore)} ~ {date1.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">Welcome Session</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{date1.toLocaleTimeString("en-GB", time_montreal)} ~ {date2.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date1.toLocaleTimeString("en-GB", time_singapore)} ~ {date2.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">Invited Talk 1</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{date2.toLocaleTimeString("en-GB", time_montreal)} ~ {date3.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date2.toLocaleTimeString("en-GB", time_singapore)} ~ {date3.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">Invited Talk 2</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{date3.toLocaleTimeString("en-GB", time_montreal)} ~ {date4.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date3.toLocaleTimeString("en-GB", time_singapore)} ~ {date4.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">Invited Talk 3</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{date4.toLocaleTimeString("en-GB", time_montreal)} ~ {date5.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date4.toLocaleTimeString("en-GB", time_singapore)} ~ {date5.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">Break</div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{date5.toLocaleTimeString("en-GB", time_montreal)} ~ {timeA.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{date5.toLocaleTimeString("en-GB", time_singapore)} ~ {timeA.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">
                                Track-1 Winner Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{timeA.toLocaleTimeString("en-GB", time_montreal)} ~ {timeB.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeA.toLocaleTimeString("en-GB", time_singapore)} ~ {timeB.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">
                                Track-2 Winner Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{timeB.toLocaleTimeString("en-GB", time_montreal)} ~ {timeC.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeB.toLocaleTimeString("en-GB", time_singapore)} ~ {timeC.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">
                                Track-3 Winner Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{timeC.toLocaleTimeString("en-GB", time_montreal)} ~ {timeD.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeC.toLocaleTimeString("en-GB", time_singapore)} ~ {timeD.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">
                                Track-4 Winner Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{timeD.toLocaleTimeString("en-GB", time_montreal)} ~ {timeE.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeD.toLocaleTimeString("en-GB", time_singapore)} ~ {timeE.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">
                                Runner-ups Presentation
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div>
                                <span className="fst-italic fw-bold text-muted">{timeE.toLocaleTimeString("en-GB", time_montreal)} ~ {timeF.toLocaleTimeString("en-GB", time_montreal)}</span> /
                                <span className="mx-1 fst-italic text-info badge bg-dark">{timeE.toLocaleTimeString("en-GB", time_singapore)} ~ {timeF.toLocaleTimeString("en-GB", time_singapore)} (SGT)</span>
                            </div>
                            <div className="fw-bold">Closing Remarks</div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default SectionSchedule
