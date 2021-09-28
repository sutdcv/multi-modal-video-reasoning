import React from 'react'
import { useState } from 'react'

import SectionRankingTable from "./SectionRankingTable"
import SectionWinners from './SectionWinners'
import RankingData from './RankingData'


const PageLeaderboard = () => {

    const allFalseState = {
        "track1": false,
        "track2": false,
        "track3": false,
        "track4": false,
    }
    const [state, setState] = useState({
        ...allFalseState,
        "track1": true,
    })
    const [activeState, setActiveState] = useState("track1")

    const handleClick = e => {
        setActiveState(e.target.id)
        setState({
            ...allFalseState,
            [e.target.id]: true,
        })

    }

    return (
        <div className="">
            <div className="jumbotron jumbotron-fluid py-5 bg-dark">
                <div className="container">
                    <h1 className="display-3">
                        Leaderboard
                    </h1>
                </div>
            </div>
            <div className="my-5 container">

                <div className="alert alert-primary">
                    <b>News:</b> A competition-summarizing paper: <a href="https://arxiv.org/abs/2108.08344" target="_blank" rel="noopener noreferrer" className="fst-italic"><u>[The Multi-Modal Video Reasoning and Analyzing Competition]</u></a> preprint is out!
                </div>

                <p className="fw-bold fs-3 text-dark">Competition Winners</p>

                {/* <div className="alert alert-info">
                    View winners' certificates <a href="certs.pdf" target="_blank" rel="noopener noreferrer" className="fst-italic"><u>here</u></a>.
                </div> */}

                <SectionWinners />

                <p className="mt-5 fw-bold fs-3 text-dark">Rankings</p>

                <ul className="nav nav-tabs nav-fill user-select-none">
                    <li className="nav-item">
                        <div className={state.track1 ? "nav-link active shadow fw-bold bg-dark text-white" : "nav-link fw-bold text-secondary"} id="track1" onClick={handleClick}>Track 1</div>
                    </li>
                    <li className="nav-item">
                        <div className={state.track2 ? "nav-link active shadow fw-bold bg-dark text-white" : "nav-link fw-bold text-secondary"} id="track2" onClick={handleClick}>Track 2</div>
                    </li>
                    <li className="nav-item">
                        <div className={state.track3 ? "nav-link active shadow fw-bold bg-dark text-white" : "nav-link fw-bold text-secondary"} id="track3" onClick={handleClick}>Track 3</div>
                    </li>
                    <li className="nav-item">
                        <div className={state.track4 ? "nav-link active shadow fw-bold bg-dark text-white" : "nav-link fw-bold text-secondary"} id="track4" onClick={handleClick}>Track 4</div>
                    </li>
                </ul>

                <SectionRankingTable data={RankingData[activeState]}/>

            </div>


        </div>
    )
}

export default PageLeaderboard
