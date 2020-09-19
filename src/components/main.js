import React from 'react'
import TweetCard from './tweetcard'
import '../App.css'
import axios from 'axios'

class Main extends React.Component {

    constructor(props) {
        super()
        this.state = {
            tweets: [],
            interval_id: ""
        }
        this.getTweets = this.getTweets.bind(this)
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
        axios.get( "http://localhost:8000/tweets")
            .then((result) => {
                console.log(result)
                result.data.map((tweet)=>{
                    this.setState({
                        tweets : [tweet, ...this.state.tweets]
                    })
                    return true ; //To Fix react warning
                })
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        let tweets = this.state.tweets.map((tweet) => {
            return <TweetCard tweet={tweet} />
        })
        return (
            <div className="main">
                {tweets}
            </div>
        )
    }
}

export default Main 


/*{
                text: "To make room for more expression we will now count all emojis as equal—including those with gender‍‍‍ and skin t… https://t.co/MkGjXf9aXm",
                id: "1050118621198921728",
                created_at: this.getDateTime("Wed Oct 10 20:19:24 +0000 2018"),
                user: {
                    name: "Twitter API",
                    screen_name: "TwitterAPI",
                    url: "https://t.co/8IkCzCDr19",
                    profile_image: "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    verified: true,
                }
            }*/