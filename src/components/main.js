import React from 'react'
import TweetCard from './tweetcard'
import '../App.css'
import axios from 'axios'

class Main extends React.Component {

    constructor(props) {
        super()
        this.state = {
            interval_id: ""
        }
        this.getTweets = this.getTweets.bind(this)
        this.getTweetCards = this.getTweetCards.bind(this)
    }

    componentDidMount() {
        this.getTweets()
        let interval = setInterval(this.getTweets, 60000, true)
        this.setState({
            tweets: this.state.tweets,
            interval_id: interval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval_id)
    }

    getTweets() {
        console.log("Getting Tweets")
        axios.get("http://localhost:8000/tweets")
            .then((result) => {
                console.log(result)
                result.data.map((user) => {
                    this.setState((oldState) => {
                        if (oldState[user.key] !== undefined) {
                            return { [user.key]: [...user.tweets, ...oldState[user.key]] }
                        } else {
                            return { [user.key]: [...user.tweets] }
                        }
                    })
                    return true; //To Fix react warning
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    getTweetCards() {
        console.log(this.state)
        let tweets = ""
        tweets = this.props.users.map((user) => {
            let tweetCards = ""
            if (this.state[user.accessToken] !== undefined) {
                tweetCards = this.state[user.accessToken].map((tweet) => {
                    //Access Token and Key are same things
                    return <TweetCard tweet={tweet} />
                })
            }
            return tweetCards
        })
        console.log(tweets)
        return tweets
    }

    render() {
        return (
            <div className="main">
                {this.getTweetCards()}
            </div>
        )
    }
}

export default Main


/*
component-state : {
    [accessToken] : [{
                text: "To make room for more expression we will now count all emojis as equal—including those with gender‍‍‍ and skin t… https://t.co/MkGjXf9aXm",
                id: "1050118621198921728",
                created_at: this.getDateTime("Wed Oct 10 20:19:24 +0000 2018"),
                user: {
                    name: "Twitter API",
                    screen_name: "TwitterAPI",
                    url: "https://t.co/8IkCzCDr19",
                    profile_image: "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    verified: true,
                },..]
    }
    [accessToken1] : [Tweet Collection]
    [accessToken2] : [Tweet Collection]
}

 */