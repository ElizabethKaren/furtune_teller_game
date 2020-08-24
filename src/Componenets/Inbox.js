import React from 'react'

const Inbox = props =>{
    console.log(props)
    return (
        <div>
            {props.myMessages.map(message => <p><strong>{message.text}</strong></p>)}
        </div>
    )
}

export default Inbox