import React from 'react'
import '../App.css'

function accountCard(props) {
    return(
        <div>
            <img src={props.user.photoURL} /> 
            <span>{props.user.displayName}</span>
            <button>Logout</button>
        </div>
    )}

export default accountCard 