import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function accountCard(props) {
    return(
        <div className = "AccountCard">
            <img src={props.user.photoURL}  alt = "TweetHead"/>
            <span >{props.user.displayName}</span>
            <button><FontAwesomeIcon icon = {faTimesCircle} /></button>
        </div>
    )}

export default accountCard 