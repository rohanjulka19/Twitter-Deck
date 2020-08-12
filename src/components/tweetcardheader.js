import React from 'react'

function tweetCardHeader(props) {

    return (
        <div>
            <img src={props.user.profile_image}  className = "TweetHeaderImage"/>
            <span>{props.user.name} </span>
            <span>@{props.user.screen_name}</span>
        </div>
    )

}

export default tweetCardHeader ;
