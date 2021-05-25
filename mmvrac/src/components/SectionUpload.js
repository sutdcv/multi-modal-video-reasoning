import React, {useMemo} from 'react';
import { useState } from 'react'

import axios from "axios";
import Button from '@material-ui/core/Button';
import {useDropzone} from 'react-dropzone';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FeedbackModal from "./FeedbackModal"

const API_ROOT = "https://dataset.markhh.com"

const customStyle = {
    width: 400
}

const baseStyle = {
    ...customStyle,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
}
  
const activeStyle = {
    borderColor: '#2196f3',
    color: '#2196f3'
}
  
const acceptStyle = {
    borderColor: '#00e676',
    color: '#00e676'
}
  
const rejectStyle = {
    borderColor: '#ff1744',
    color: '#ff1744'
}



const formatBytes = (bytes, decimals = 2) => {
    // ref: https://stackoverflow.com/a/18650828
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const SectionUpload = () => {
    
    /////////////////////// Submitting State (while submitting) ///////////////////////////////////////
    
    const [submitting, setSubmitting] = useState(false);
    const startSubmitting = () => setSubmitting(true);
    const endSubmitting = () => setSubmitting(false);
    
    /////////////////////// Feedback Modal (after submission) ///////////////////////////////////////

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [submissionState, setSubmissionState] = useState(false);
    const [submissionResponse, setSubmissionResponse] = useState({})

    /////////////////////// Form Data ///////////////////////////////////////////////////////////////

    const [state, setState] = useState({
        email: "",
        track: "",
    });

    const [errorState, setErrorState] = useState({
        email: false,
        track: false,
        file: false,
    })

    const resetSingleErrorState = (e) => {
        if (e.target.value !== ""){
            setErrorState({...errorState, [e.target.name]: false})
        }
    }

    const handleStateChange = (e) => {
        resetSingleErrorState(e)
        setState((state) => {
            return {...state, [e.target.name]:e.target.value}
        })
    }

    /////////////////////// Drag n Drop File Upload Handling ///////////////////////////////////////////
    // ref: https://react-dropzone.js.org/#section-styling-dropzone

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: "text/csv", 
        maxFiles:1, 
        maxSize: 10000000, // 10000000 bytes = 10 MB
        multiple: false,
        onDropAccepted: () => {
            setErrorState((state) => {return {...state, file: false}})
        }
    });

    const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
    }), [
    isDragActive,
    isDragReject,
    isDragAccept
    ]);
    
    const files = acceptedFiles.map(file => (
        <code className="badge bg-success text-wrap fs-6 my-2" key={file.path}>
          {file.path} ({formatBytes(file.size)})
        </code>
    ));

    /////////////////////// Handle Submit ///////////////////////////////////////////

    const validateAllField = () => {
        var key;
        var valid = true;
        var newErrorState = {};

        for (key in state) {
            var value = state[key];

            if (value === ""){
                newErrorState[key] = true
                valid = false;
            } else {
                if (["email", "gmail", "piEmail"].includes(key)){
                    var validEmail = validateEmail(value)
                    if (!validEmail){
                        newErrorState[key] = true
                        valid = false;
                        console.log("Invalid Email: " + state[key])
                    }
                }
            }
        }

        if (acceptedFiles.length !== 1){
            valid = false
            newErrorState["file"] = true
        } else {
            newErrorState["file"] = false
        }

        setErrorState(newErrorState)
        return valid
    }

    const validateEmail = (email) =>  {
        // ref: https://stackoverflow.com/a/46181
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const resetAllFormStates = () => {
        if (submissionState){
            setState({ email: "", track: ""})
            setErrorState({ email: false, track: false, file: false})
            acceptedFiles.pop()
            setSubmitting(false)
            setSubmissionState(false)
            setSubmissionResponse({})
    }}
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateAllField()){
            startSubmitting()
            console.log(state)
            // Submit Form To Backend
            const reqURL = API_ROOT + "/iccv2021/submission?email=" + state.email + "&track=" + state.track
            const formData = new FormData();
            // formData.append("email", state.email)
            // formData.append("track", state.track)
            formData.append("file",acceptedFiles[0])

            const config = {
                headers: {
                    "accept": "application/json",
                    "Content-Type": "multipart/form-data",
                }
            };

            await axios.post(reqURL, formData, config)
            .then((response) => {
                // submission success
                endSubmitting()
                // check response status
                console.log(response)
                setSubmissionResponse({...response.data})
                setSubmissionState(true)
                handleShowModal()
            })
            .catch((error) => {
                // submission failed
                
                if (error.response) {
                    console.error(error.response.data);
                    setSubmissionResponse({
                        ...error.response.data,
                        "statusCode": error.response.status,
                    })
                    
                } else {
                    setSubmissionResponse({
                        "statusCode": error.response.status,
                    })
                }
                endSubmitting()
                handleShowModal()
            })

        } else {
            console.log("Error: Request form is incomplete.")
        }
    }

    return (
        <div className="">
            {/*////////////////// FeedbackModal //////////////////*/}
            {/* <Button name="dev debug button" variant="outlined" onClick={()=>{
                handleShowModal()
            }}>
                Launch static backdrop modal
            </Button> */}

            <FeedbackModal 
            data={submissionResponse} 
            success={submissionState} 
            showModal={showModal} 
            handleCloseModal={handleCloseModal}
            callback={resetAllFormStates}
            />
            <h3 className="mb-4">Create a New Submission</h3>
            <form className={"my-3 d-flex flex-column align-items-start"}>
                <div className={"mb-3"}>
                    <TextField 
                    style={customStyle} 
                    required
                    error={errorState.email}
                    name="email"
                    value={state.email}
                    onChange={handleStateChange} 
                    label="Email" 
                    helperText="Team leader or any team member's Email address"
                    variant="filled" />
                </div>
                <div className={"mb-3"}>
                    <FormControl 
                    required 
                    error={errorState.track}
                    style={customStyle} 
                    variant="filled">
                        <InputLabel>Track</InputLabel>
                        <Select
                        name="track"
                        value={state.track}
                        onChange={handleStateChange}
                        >
                            <MenuItem value={1}>Track-1 Video Question Answering</MenuItem>
                            <MenuItem value={2}>Track-2 Skeleton-based Action Recognition</MenuItem>
                            <MenuItem value={3}>Track-3 Fisheye Video-based Action Recognition</MenuItem>
                            <MenuItem value={4}>Track-4 Person Re-Identification</MenuItem>
                        </Select>
                        <FormHelperText>Select one track and submit one file at a time</FormHelperText>
                    </FormControl>
                </div>
                <div className={"mb-3"}>
                    <p className={errorState.file? "badge bg-danger text-wrap fs-6 my-2": ""}>Please select a file to submit *</p>
                    <div {...getRootProps({style})}>
                        <input {...getInputProps()} />
                        <p>Drop your file here or click to select file</p>
                        <p>Only .csv file is allowed</p>
                    </div>
                    <aside>
                        <p>{files}</p>
                        
                    </aside>
                </div>
                <div className={"mb-3"}>
                    <Button 
                    // disabled={submitting}
                    disabled
                    style={{minWidth: "15%"}}
                    onClick={handleSubmit}
                    variant="contained" 
                    color="primary">
                        {submitting? <span className="spinner-grow spinner-grow-sm me-2" role="status" aria-hidden="true"></span>:null}
                        {submitting? "Submitting...":"Submit"}
                    </Button> <span><code>(opening on 25 June)</code></span>
                </div>
            </form>
        </div>
    )
}

export default SectionUpload
