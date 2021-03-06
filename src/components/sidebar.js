import React from 'react'
import AddButton from './addbutton'
import AccountCard from './accountcard'
import '../App.css'

class Sidebar extends React.Component {
    render() {
        let accountList = this.props.users.map(user =>{
            return <AccountCard onClickRemove = { this.props.onClickRemove } 
            user = {user.providerData}  
            color = {user.color} changeColour = {this.props.changeColour} />
        })
        return (
            <div className = "sidebar">
                <h1>TW</h1>
                <AddButton onClick = {this.props.onClick} />
                {accountList}
            </div>
        )
    }
}

export default Sidebar 