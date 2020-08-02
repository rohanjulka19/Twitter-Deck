import React from 'react'
import Main from './components/main'
import Sidebar from './components/sidebar'
import './App.css'
import firebase from 'firebase'
import {twitter_provider,auth_handler} from './firebase.js'
import { trunc } from 'core-js/fn/number'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        user : []
    }
    this.addAccount = this.addAccount.bind(this)
  }

  addAccount() {

    auth_handler.signInWithPopup(twitter_provider).then((result) => {
     
        this.setState = {
            user : this.state.user.push({
              accessToken: result.credential.accessToken,
              secret: result.credential.secret,
              providerData: result.user.providerData
            })
     
        }        
        console.log("Success")
    }).catch((error) => {
      console.log(error)
    })
  }
  

  render() {
    return (
      <div className = "app">
        <Sidebar onClick = {this.addAccount} />
        <Main />
      </div>
    )
  }
}

export default App ;