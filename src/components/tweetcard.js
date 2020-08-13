import React from 'react'
import Header from './tweetcardheader'
import Body from './tweetcardbody'
import Footer from './tweetcardfooter'
import '../App.css'


function tweetCard (props) {
    return (
        <div className = "TweetCard">
            <Header user = { props.tweet.user}   />
            <Body tweet_data = {props.tweet.text}  tweet_date={props.tweet.created_at[1]} />
            <Footer/>
        </div>
    )
}

export default tweetCard