import React from 'react'
import Main from './components/main'
import Sidebar from './components/sidebar'
import './App.css'
import {twitter_provider,auth_handler} from './firebase.js'
import crypto from 'crypto'
import OAuth from 'oauth-1.0a'
import axios from 'axios'
import { METHODS } from 'http'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        users : [{
          accessToken : "2447266872-owizz1VtMUlozSqW685ZlPYo6FlnfFxnJurlxOw",
          secret: "PhHMi1qVRALypOx4gY2wl60Vs99nzz3sjIqQppAoc3nlX",
          providerData : {
            displayName: "rohan",
            photoURL: "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
            providerId: "twitter.com" ,
            uid: "2447266872"
          }
        }]
    }
    this.addAccount = this.addAccount.bind(this)
    this.getTweets = this.getTweets.bind(this)
  }

  addAccount() {

    auth_handler.signInWithPopup(twitter_provider).then((result) => {
      
      this.setState( {
          users : [...this.state.users,{
          accessToken: result.credential.accessToken,
          secret: result.credential.secret,
          providerData: result.user.providerData[0]
      }]
    })
        console.log(result)
        console.log("Success")
    }).catch((error) => {
      console.log(error)
    })
  }

  getTweets() {
    const oauth = OAuth ({
      consumer: {} ,
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return crypto
              .createHmac('sha1', key)
              .update(base_string)
              .digest('base64')
      },
    })

    const request = {
      url:'https://api.twitter.com/1.1/statuses/home_timeline.json',
      method:'get',
    }
    const token = {
      key: "2447266872-owizz1VtMUlozSqW685ZlPYo6FlnfFxnJurlxOw", 
      secret : "PhHMi1qVRALypOx4gY2wl60Vs99nzz3sjIqQppAoc3nlX"
    }
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
    axios.get(request.url,{
      headers: oauth.toHeader(oauth.authorize(request, token))
    }).then(result => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })

  }
  

  render() {
    return (
      <div className = "app">
        <Sidebar onClick = {this.addAccount} users = {this.state.users} />
        <Main  getTweets = {this.getTweets} />
      </div>
    )
  }
}

export default App ;