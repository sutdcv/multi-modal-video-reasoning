import React from 'react'
import PropTypes from 'prop-types'

const SectionRankingTable = (props) => {
    return (
        <div>
            <table className="table table-light table-striped table-hover table-bordered user-select-none">
                <thead>
                    <tr className="d-flex user-select-none">
                        <th className="col-1 text-center" scope="col">#</th>
                        <th className="col-2" scope="col">Team Name</th>
                        <th className="col-7" scope="col">Organization</th>
                        <th className="col-1 text-center fs-6" scope="col">Remaining Attempts</th>
                        <th className="col-1 text-center fs-6" scope="col">Best Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((team, index) =>
                        <tr className="d-flex" key={index + 1}>
                            <th className="col-1 text-center user-select-none" scope="row">{index + 1}</th>
                            <td className="col-2">{team.team_name}</td>
                            <td className="col-7 text-capitalize">{team.team_org}</td>
                            <td className="col-1 text-center user-select-none">{team.attempts_left ? team.attempts_left : "5"}</td>
                            <td className="col-1 text-center user-select-none">{team.highest_score}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

SectionRankingTable.defaultProps = {
    data: [{
            team_name: "team_name",
            team_org: "team_org",
            team_size: 3,
            highest_score: 1,
        },{
            team_name: "team_name",
            team_org: "team_org",
            team_size: 2,
            highest_score: 0.9,
        }]
}
SectionRankingTable.propTypes = {
    data: PropTypes.array
}

export default SectionRankingTable
