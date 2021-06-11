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
                <h6 className="my-3 fw-bold text-muted">----- Track 1, 2, 3 -----</h6>
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
                <p className="mx-2">Score Computation: <code className="mx-1">score = number of correct predictions / number of testing samples</code></p>

                <h6 className="my-3 fw-bold text-muted">-------- Track 4 --------</h6>
                <table className="table my-3" style={{maxWidth: 400}}>
                    <tbody>
                        <tr>
                            <td>File format</td>
                            <td><code>.npz</code></td>
                        </tr>
                        <tr>
                            <td>Max file size</td>
                            <td><code>120 MB</code></td>
                        </tr>
                        <tr>
                            <td>Submission attempts allowed</td>
                            <td><code>5</code></td>
                        </tr>
                        <tr>
                            <td>Example File Export for Track 4</td>
                            <td>
                                <a href="https://gist.github.com/sayano-lee/7bd3d816fb0055f108947387b7477bb1" target="_blank" rel="noopener noreferrer">View</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="mx-2">Score Computation: <code className="mx-1">score = mean Average Precision</code></p>

            </div>

            <div className="container">
                <SectionUpload />
                <p>If you encounter any issue while submitting here, please send us an email.</p>
            </div>
        </div>
    )
}

export default PageSubmission
