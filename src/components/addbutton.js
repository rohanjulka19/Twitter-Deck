import React from 'react'
import '../App.css'

class AddAccount extends React.Component {
    
    render() {
        return (
            <button className = "AddAccountButton" onClick ={this.props.onClick} >
                + ADD ACCOUNT
            </button>
        )
    }
}

export default AddAccount 