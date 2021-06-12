import React from 'react'
import SectionUpload from "./SectionUpload"

const PageSubmission = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid py-5 bg-dark">
                <div className="container">
                    <h1 className="display-3">
                        Submission
                    </h1>
                </div>
            </div>

            <div className="container my-5">
                <h3 className="">Submission Guideline</h3>
                <h6 className="mt-4 mb-3 fw-bold text-muted">----- Track 1, 2, 3 -----</h6>
                <table className="table my-3" style={{maxWidth: 400}}>
                    <tbody>
                        <tr>
                            <td>File format</td>
                            <td><code>.csv</code></td>
                        </tr>
                        <tr>
                            <td>Max file size</td>
                            <td><code>1 MB</code></td>
                        </tr>
                        <tr>
                            <td>Submission attempts allowed</td>
                            <td><code>5</code></td>
                        </tr>
                        <tr>
                            <td>Example submission for Track 1</td>
                            <td><a href="https://raw.githubusercontent.com/SUTDCV/SUTD-TrafficQA/master/examples/submission_example.csv" target="_blank" rel="noopener noreferrer">View</a></td>
                        </tr>
                        <tr>
                            <td>Example submission for Track 2</td>
                            <td><a href="https://gist.githubusercontent.com/sayano-lee/e98ec0be2972ad6cbd23324021f65d43/raw/54a26c6df2b963760913c14cfaa0c9b36f05ee29/submission.csv" target="_blank" rel="noopener noreferrer">View</a></td>
                        </tr>
                        <tr>
                            <td>Example submission for Track 3</td>
                            <td><a href="https://gist.githubusercontent.com/sayano-lee/e98ec0be2972ad6cbd23324021f65d43/raw/54a26c6df2b963760913c14cfaa0c9b36f05ee29/submission.csv" target="_blank" rel="noopener noreferrer">View</a></td>
                        </tr>
                    </tbody>
                </table>
                <ul className="fst-italic">
                    <li className="">Score Computation: <code className="mx-1">score = number of correct predictions / number of testing samples</code></li>
                    <li className="">You will be able to see your score feedback instantly after your submission.</li>
                </ul>

                <h6 className="mt-4 mb-3 fw-bold text-muted">-------- Track 4 --------</h6>
                <table className="table my-3" style={{maxWidth: 400}}>
                    <tbody>
                        <tr>
                            <td>File format</td>
                            <td><code>.npz</code></td>
                        </tr>
                        <tr>
                            <td>Max file size</td>
                            <td><code>250 MB</code></td>
                        </tr>
                        <tr>
                            <td>Submission attempts allowed</td>
                            <td><code>5</code></td>
                        </tr>
                        <tr>
                            <td>File (<code>.npz</code>) Export Example</td>
                            <td>
                                <a href="https://gist.github.com/sayano-lee/7bd3d816fb0055f108947387b7477bb1" target="_blank" rel="noopener noreferrer">View</a>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <ul className="fst-italic">
                    <li className="">Score Computation: <code className="mx-1">score = mean Average Precision</code></li>
                    <li className="">You will be able to see your score feedback instantly after your submission.</li>
                    <li className="">Due to the large file size, depending on your network speed, it may take a minute to complete submission.</li>
                    <li className="">If you could not submit via the interface below, please upload your file to Google Drive and send us the sharable link via email.</li>
                </ul>
                <hr className="mt-4"/>
            </div>
            
            <div className="container">
                <SectionUpload />
                <ul className="fst-italic">
                    <li className="">Please avoid last-minute submission, as the server may be busy.</li>
                    <li className="">If you encounter any issue while submitting here, please inform us via email.</li>
                </ul>
            </div>
        </div>
    )
}

export default PageSubmission
