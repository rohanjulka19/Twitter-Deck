import React from 'react'
import Header from './tweetcardheader'
import Body from './tweetcardbody'
import Footer from './tweetcardfooter'
import '../App.css'


function tweetCard (props) {
    return (
        <div className = "TweetCard">
            <Header user = { props.tweet.user}  created_at={props.tweet.created_at}  />
            <Body tweet_data = {props.tweet.text} />
            <Footer/>
        </div>
    )
}

export default tweetCard