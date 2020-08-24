import React from 'react'
import { Link } from 'react-router-dom'

const Inbox = props =>{
    console.log(props)
    return (
        <div>
            {props.myMessages.map(message => <Link to={`/horiscope/inbox/${message.id}`}><p><strong>{message.text}</strong></p></Link>)}
        </div>
    )
}

export default Inbox