import React from 'react'
import '../App.css'
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js'

class AddAccount extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className = "AddAccountButton" onClick ={this.props.onClick} >
                + ADD ACCOUNT
            </button>
        )
    }
}

export default AddAccount 