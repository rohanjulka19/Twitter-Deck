import React from 'react'
import image  from '../Twitter_Logo_Blue.svg'

function tweetCardHeader(props) {

    return (
        <div className="TweetHeader">
            <div className="HeaderImageCircle"><img src={props.user.profile_image_url} className="TweetHeaderImage" alt = "" /></div>
            <div className = "HeaderUserDetails">
                <span className="HeaderUsername">{props.user.name}</span>
                <span className= "HeaderScreenName">@{props.user.screen_name}</span>
            </div>
            <img src={ image } className = "HeaderLogo" alt = "TweetHead"/>
        </div>
    )

}

export default tweetCardHeader;
