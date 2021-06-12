import React from 'react'
import { useState } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

  import PageHome from "./PageHome"
  import PageDataset from "./PageDataset"
  import PageSubmission from "./PageSubmission"
  import PageLeaderboard from "./PageLeaderboard"

const Navigation = () => {
    const pageRoot = ""

    const dateObj = new Date();
    const date1 = new Date(Date.UTC(2021, 4, 20, 15, 0, 0));
    const date4 = new Date(Date.UTC(2021, 5, 25, 15, 0, 0));
    const registerIsOpen = () => {
        if (date1 <= dateObj && dateObj <= date4) {
            return true;
        } else {
            return false;
        }
    }

    const initialState = {
        "Home": false,
        "Datasets": false,
        "Submission": false,
        "Leaderboard": false,
    }

    const [activePage, setActivePage] = useState({
        "Home": true,
        "Datasets": false,
        "Submission": false,
        "Leaderboard": false,
    })

    const handleNavOnClick = (e) => {
        setActivePage({...initialState, [e.target.name]:true})
    }

    return (
        <Router>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container">
                <Link className={activePage.Home? "navbar-brand active" : "navbar-brand"} name="Home" onClick={handleNavOnClick} to={pageRoot + "/"}>MMVRC | ICCV 2021</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={activePage.Home? "nav-link active" : "nav-link"} name="Home" onClick={handleNavOnClick} to={pageRoot + "/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activePage.Datasets? "nav-link active" : "nav-link"} name="Datasets" onClick={handleNavOnClick} to={pageRoot + "/datasets"}>Datasets & Tracks</Link>
                        </li>
                        {
                            registerIsOpen() ? 
                            <li className="nav-item">
                                <a className="nav-link" href="https://sutdcv.github.io/ICCV-2021-Workshop-Registration/">Registration</a>
                            </li> 
                            : null
                        }
                        
                        <li className="nav-item">
                            <Link className={activePage.Submission? "nav-link active" : "nav-link"} name="Submission" onClick={handleNavOnClick} to={pageRoot + "/submission"}>Submission</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={activePage.Leaderboard? "nav-link active" : "nav-link"} name="Leaderboard" onClick={handleNavOnClick} to={pageRoot + "/leaderboard"}>Leaderboard</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Switch>
            <Route path={pageRoot + "/datasets"} component={PageDataset} />
            <Route path={pageRoot + "/submission"} component={PageSubmission} />
            <Route path={pageRoot + "/leaderboard"} component={PageLeaderboard} />
            <Route path={pageRoot + "/"} component={PageHome} />
        </Switch>
        </Router>

    )
}

export default Navigation
