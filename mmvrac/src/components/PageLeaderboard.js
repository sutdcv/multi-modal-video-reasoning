import React from 'react'
import { useState, useEffect } from 'react'

import axios from "axios";

import SectionRankingTable from "./SectionRankingTable"

const API_ROOT = "https://dspower.markhh.com/"
// const API_ROOT = "http://127.0.0.1:8000"


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

    const [rankingData, setRankingData] = useState({
        "track1": [],
        "track2": [],
        "track3": [],
        "track4": [],
    })
    const [initialized, setInitialized] = useState(false)

    const getRankingData = async () => {
        if (!initialized){
            console.log("getting data")
            const config = {
                method: "GET",
                url: API_ROOT + "/iccv2021/rankings",
                headers: {
                    "accept": "application/json",
                    // "Content-Type": "application/json",
                },
            };
            await axios(config)
            .then((response) => {
                console.log(response)

                if (response.status === 200) {
                    setInitialized(true)
                    setRankingData(response.data)
                } else {
                    console.error("Unexpected non-200 status code")
                    console.error(response)
                }

            })
            .catch((error) => {
                console.error(error)
            })

        } else {
            console.log("not getting data")
        }
    }

    useEffect(() => {
        getRankingData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = e => {
        getRankingData()
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
                <p className="user-select-none mb-1">* Data below updates every 60 seconds at most.</p>
                <p className="user-select-none mb-3">* The competition result and team rankings will only be reflected below after 8 July 2021.</p>

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

                <SectionRankingTable data={rankingData[activeState]}/>

                {!initialized?
                <div className="m-3 spinner-grow container d-flex flex-row justify-content-center">
                    <span className="visually-hidden">Loading...</span>
                </div>
                :null}

            </div>


        </div>
    )
}

export default PageLeaderboard
