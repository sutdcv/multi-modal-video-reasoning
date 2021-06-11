import React from 'react'
import PropTypes from 'prop-types'
import PlaceholderProfileImg from './PlaceholderProfileImg'

const PersonProfile = (props) => {
    const nameLinkStyle = {
        textDecoration: "none",
        color: "#505050",
    }
    const profileImgStyle = {
        height:props.dim,
        borderRadius: "50%",
    }
    return (
        <div className="container px-3 col-md-3 py-2 text-center">
            <a href={props.link} style={nameLinkStyle} target="_blank" rel="noopener noreferrer">
            {props.imgSrc ? <img className={"user-select-none"} src={props.imgSrc} alt={props.name} style={profileImgStyle}/> : <PlaceholderProfileImg dim={props.dim} />}
            <h4>{props.name}</h4>
            </a>
            <div>
                <p className="my-1">{props.title}</p>
                <p>{props.org}</p>
            </div>
        </div>
    )
}

PersonProfile.defaultProps = {
    name: "J. Random Hacker",
    imgSrc: "",
    link: "",
    title: "Title",
    org: "Organization",
    dim: 144,
}

PersonProfile.propTypes = {
    name: PropTypes.string,
    imgSrc: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    org: PropTypes.string,
    dim: PropTypes.number,
}


export default PersonProfile
