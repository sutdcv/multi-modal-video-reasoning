import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'

const FeedbackModal = (props) => {
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
                    <div className={props.success?"text-success":"text-danger"}>
                        {props.success ? "Success !": "Error ! (" + props.data.statusCode + ")"}
                    </div>
                    
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {props.success ? 
                <div>
                    <b className="text-success">You have successfully made a submission!</b>
                    {props.data.team_name ? <p className="fst-italic fw-regular mt-1">Team Name: {props.data.team_name}</p> : null}
                    {props.data.score ? <p className="fst-italic fw-regular mt-1">Score: {props.data.score}</p> : null}
                    {props.data.score_highest ? <p className="fst-italic fw-regular mt-1">Highest Score: {props.data.score_highest}</p> : null}
                    {props.data.submission_count ? <p className="fst-italic fw-regular mt-1">Submission Count: {props.data.submission_count}</p> : null}
                    {props.data.remaining_submission_count ? <p className="fst-italic fw-regular mt-1">Remaining Submission Count: {props.data.remaining_submission_count}</p> : null}
                </div>
                : 
                <div>
                    {props.data.detail ? <p className="fst-italic fw-regular mt-1">{props.data.detail}</p> : null}
                    {(props.data.statusCode >= 500)?
                    <div>
                        <b className="text-danger">Seems like a server error, please take a screenshot and let us know via email.</b>
                    </div>:<b className="text-danger">Invalid Submission. Please try again.</b>
                    }
                    
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
