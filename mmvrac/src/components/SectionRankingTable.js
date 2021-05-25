import React from 'react'
import PropTypes from 'prop-types'

const SectionRankingTable = (props) => {
    return (
        <div>
            <table className="table table-light table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th className="" scope="col">#</th>
                        <th className="" scope="col">Team Name</th>
                        <th className="" scope="col">Organization</th>
                        <th className="text-center" scope="col">Remaining Attempts</th>
                        <th className="text-center" scope="col">Best Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((team, index) =>
                        <tr key={index + 1}>
                            <th scope="row">{index + 1}</th>
                            <td>{team.team_name}</td>
                            <td>{team.team_org}</td>
                            <td className="text-center">{team.attempts_left ? team.attempts_left : "5"}</td>
                            <td className="text-center">{team.highest_score}</td>
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
