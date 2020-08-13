import React from 'react'
import TweetCard from './tweetcard'
import '../App.css'

class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tweets : [{
                text: "To make room for more expression we will now count all emojis as equal—including those with gender‍‍‍ and skin t… https://t.co/MkGjXf9aXm",
                id:"1050118621198921728",
                created_at: this.getDateTime("Wed Oct 10 20:19:24 +0000 2018"),
                user : {
                    name: "Twitter API",
                    screen_name: "TwitterAPI",
                    url: "https://t.co/8IkCzCDr19",
                    profile_image: "https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",
                    verified: true,
                }
            }]
        }
    }

    getDateTime(date_time) {
        let date_time_arr = date_time.split(" ")
        let day = date_time_arr[0]
        let time = date_time_arr[3]
        let date = date_time_arr[2] + " " + date_time_arr[1] + " " + date_time_arr[5]
        return ([day,date,time])
    }

    render() {
        let tweets = this.state.tweets.map((tweet)=> {
            return <TweetCard tweet  = {tweet} />
        })
        return (
            <div className = "main">
                {tweets}
            </div>
        )
    }
}

export default Main 