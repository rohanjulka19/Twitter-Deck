import React from 'react'
import Main from './components/main'
import Sidebar from './components/sidebar'
import './App.css'
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      //Twitter data fetched from the api 
      
    }
    this.addAccount = this.addAccount.bind(this)
  }

  addAccount() {

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