import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'

const FeedbackModal = (props) => {
    const is_success = () => {
        if (props.success && props.data.score >= 0){
            return true;
        } else {
            return false;
        }
    }

    const round_score = (score) => {
        return score.toPrecision(3);
    }

    const get_error_text = () => {
        if (props.data.statusCode){
            if (props.data.statusCode >= 500) {
                return "Sorry! Seems like a server error, please take a screenshot and let us know via email."
            } else {
                return "Invalid Submission. Attempt not counted."
            }
        } else {
            if (props.data.score === -1){
                return "Invalid Submission. Something might be wrong with your file, score computation failed. Attempt not counted."
            } else {
                return "Unexpected Error."
            }
        }

    }

    return (
        <Modal
        centered
        show={props.showModal}
        onHide={props.handleCloseModal}
        backdrop="static"
        keyboard={false}
        onExited={props.callback}
        >
            <Modal.Header>
                <Modal.Title>
                    <div className={is_success() ? "text-success":"text-danger"}>
                        {is_success() ? "Success !": "Error !"}
                    </div>

                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {is_success() ?
                <div>
                    <b className="text-success">You have successfully made a submission!</b>
                    <table className="mt-2 table table-striped table-success">
                        <tbody>
                            <tr>
                                <th scope="row">Team Name:</th>
                                <td>{props.data.team_name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Track:</th>
                                <td>{props.data.track}</td>
                            </tr>
                            <tr>
                                <th scope="row">File submitted:</th>
                                <td>{props.data.filename}</td>
                            </tr>
                            <tr>
                                <th scope="row">Score:</th>
                                <td>{round_score(props.data.score)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Team Best Score:</th>
                                <td>{round_score(props.data.score_highest)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Attempts Left:</th>
                                <td>{props.data.attempts_left}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                :
                <div>
                    {props.data.detail ? <p className="fst-italic fw-regular mt-1">{props.data.detail}</p> : null}
                    <b className="text-danger">{get_error_text()}</b>
                </div>}
            </Modal.Body>

            <Modal.Footer>
                <Button href="" variant="contained" onClick={props.handleCloseModal}>OK</Button>
            </Modal.Footer>

        </Modal>
    )
}

FeedbackModal.defaultProps = {
    data: {},
    success: false,
    showModal:false,
    handleCloseModal: ()=>{},
    callback: ()=>{},
}

FeedbackModal.propTypes = {
    data: PropTypes.object,
    success: PropTypes.bool,
    showModal: PropTypes.bool,
    handleCloseModal: PropTypes.func,
    callback: PropTypes.func,
}

export default FeedbackModal
