import React from 'react'
import axios from 'axios'
import Main from './components/main'
import Sidebar from './components/sidebar'
import './App.css'
import { twitter_provider, auth_handler } from './firebase.js'


class App extends React.Component {

  constructor(props) {
    super()
    this.state = {
      users: [],
      colors : ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', 
      '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF']
    }
    this.addAccount = this.addAccount.bind(this)
    this.removeAccount = this.removeAccount.bind(this)
    this.changeColour = this.changeColour.bind(this)
  }

  changeColour(color, uid) {
    console.log(color.hex)
    console.log(uid)
    let mutableUsers = this.state.users;
    mutableUsers.map(user => {
      if (user.providerData.uid === uid) {
        user.color = `${color.hex}`
      }
    })
    this.setState({
      users : [...mutableUsers]
    })
  }

  removeAccount(displayName) {
    console.log("Called Delete")
    let userToRemove = this.state.users.find(user => user.providerData.displayName === displayName)
    console.log(userToRemove)
    let filteredUsers = this.state.users.filter(user => user.providerData.displayName !== displayName)
    console.log(filteredUsers)
    this.setState({
      users: [...filteredUsers]
    })
    axios.delete("http://localhost:8000/user", {
      params: {
        key: `${userToRemove.accessToken}`
      }
    })
      .then(() => console.log("Deleted"))
      .catch(error => console.log(error))
  }

  addAccount() {
    auth_handler.signInWithPopup(twitter_provider).then((result) => {
      console.log(result)
      axios.post("http://localhost:8000/user", {
        key: result.credential.accessToken,
        secret: result.credential.secret
      }).then(() => {
        this.setState({
          users: [...this.state.users, 
            { "accessToken": result.credential.accessToken, 
              "providerData": result.user.providerData[0] ,
              "color": this.state.colors[Math.floor(Math.random()*10)]
            }]
        })
      }).catch(error => {
        console.log(error)
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    let targetComponent = <Main users={this.state.users} />
    if (this.state.users.length === 0)
      targetComponent = <div className="main"><h1>Add Account</h1></div>
    return (
      <div className="app">
        <Sidebar onClick={this.addAccount} onClickRemove={this.removeAccount} users={this.state.users} changeColour = {this.changeColour} />
        {targetComponent}
      </div>
    )
  }
}

export default App;


/*{
       accessToken: "2447266872-owizz1VtMUlozSqW685ZlPYo6FlnfFxnJurlxOw",
        providerData: {
          displayName: "rohan",
          photoURL: "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
          providerId: "twitter.com",
          uid: "2447266872"
        }
      }*/