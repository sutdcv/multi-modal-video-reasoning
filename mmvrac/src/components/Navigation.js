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

const Navigation = () => {
    const pageRoot = ""

    const initialState = {
        "Home": false,
        "Datasets": false,
        "Submission": false,
    }

    const [activePage, setActivePage] = useState({
        "Home": true,
        "Datasets": false,
        "Submission": false,
    })

    const handleNavOnClick = (e) => {
        setActivePage({...initialState, [e.target.name]:true})
    }

    return (
        <Router>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className={activePage.Home? "navbar-brand active" : "navbar-brand"} name="Home" onClick={handleNavOnClick} to={pageRoot + "/"}>Multi-Modal Video Understanding | ICCV 2021</Link>
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
                        <li className="nav-item">
                            <a className="nav-link" href="https://sutdcv.github.io/ICCV-2021-Workshop-Registration/">Registration</a>
                        </li>
                        <li className="nav-item">
                            <Link className={activePage.Submission? "nav-link active" : "nav-link"} name="Submission" onClick={handleNavOnClick} to={pageRoot + "/submission"}>Submission</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Switch>
            <Route path={pageRoot + "/datasets"} component={PageDataset} />
            <Route path={pageRoot + "/submission"} component={PageSubmission} />
            <Route path={pageRoot + "/"} component={PageHome} />
        </Switch>
        </Router>
        
    )
}

export default Navigation
