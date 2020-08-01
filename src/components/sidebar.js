import React from 'react'
import AddButton from './addbutton'
import AccountCard from './accountcard'
import '../App.css'
class Sidebar extends React.Component {
    render() {
        //Sidebar will list and manage the user's accounts

        return (
            <div className = "sidebar">
                <h1>TW</h1>
                <AddButton onClick = {this.props.onClick} />
            </div>
        )
    }
}

export default Sidebar 