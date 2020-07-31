import React from 'react'
import Main from './components/main'
import Sidebar from './components/sidebar'
import './App.css'


class App extends React.Component {
  
  App() {
    this.setState = {
      //Twitter data fetched from the api 
    }
  }

  render() {
    return (
      <div className = "app">
        <Sidebar/>
        <Main />
      </div>
    )
  }
}

export default App ;