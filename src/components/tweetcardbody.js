import React from 'react'

function tweetCardBody(props) {


    return (    
        <div className = "TweetBody">
        <p className = "TweetBodyData">{props.tweet_data}</p>
        <p className = "TweetDate">{props.tweet_date}</p>
        </div>
    )

}
export default tweetCardBody ;