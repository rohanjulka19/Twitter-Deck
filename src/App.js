import React from 'react'
import Main from './components/main'
import Sidebar from './components/sidebar'
import './App.css'
import {twitter_provider,auth_handler} from './firebase.js'


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
  

  render() {
    return (
      <div className = "app">
        <Sidebar onClick = {this.addAccount} users = {this.state.users} />
        <Main />
      </div>
    )
  }
}

export default App ;