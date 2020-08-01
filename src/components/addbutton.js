import React from 'react'
import '../App.css'
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js'

class AddAccount extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<TwitterLogin
            requestTokenUrl="https://obscure-badlands-51767.herokuapp.com/"
            />)
    }
}

export default AddAccount 