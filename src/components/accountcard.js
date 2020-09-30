import React, {useState} from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { TwitterPicker } from 'react-color'


function AccountCard(props) {
    return(
        <div className = "AccountCard">
            <img src={props.user.photoURL}  alt = "TweetHead"/>
            <span >{props.user.displayName}</span>
            
            <div class = "ColorPicker">

                <button class = "ColorPickerButton" style = {{backgroundColor:props.color}}></button>
                <TwitterPicker 
                onChangeComplete = {(color) => props.changeColour(color,props.user.uid)}
                className = "ColorPickerComp" width="30vw" triangle = "top-left" />
            </div>
            <button class ="RemoveAccount" onClick = {() => props.onClickRemove(props.user.displayName)}><FontAwesomeIcon icon = {faTimesCircle} /></button>
        </div>
    )}

export default AccountCard 


// <CirclePicker onChangeComplete = {} />
           