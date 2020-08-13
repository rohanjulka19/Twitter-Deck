import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment , faRetweet } from '@fortawesome/free-solid-svg-icons'

function tweetCardFooter(props) {

    return (
        <div>
            <FontAwesomeIcon icon = {faComment} />
            <FontAwesomeIcon icon = {faRetweet} />
        </div>
    )

}

export default tweetCardFooter ;
 