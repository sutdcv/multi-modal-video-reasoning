import React from 'react'
import PropTypes from 'prop-types'

const SectionRankingTable = (props) => {

    return (
        <div>
            {/* <table className="table table-striped table-hover table-bordered"> */}
            <table className="table table-hover ">
                <thead>
                    <tr className="d-flex user-select-none">
                        <th className="col-1 text-center" scope="col">Rank</th>
                        <th className="col-3" scope="col">Team Name</th>
                        <th className="col-8" scope="col"><span className="badge rounded-pill bg-secondary">Team Size</span> | Organization(s)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((team, index) =>
                        <tr className={"d-flex"} key={index + 1}>
                            <th className="col-1 text-center user-select-none" scope="row">{(index + 1 <= 10)?(index + 1):"-"}</th>
                            <td className="col-3">{team.team_name}</td>
                            <td className="col-8 text-capitalize"><span className="badge rounded-pill bg-secondary user-select-none">{team.team_size}</span> | {team.team_org}</td>
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
