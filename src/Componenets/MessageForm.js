import React from 'react'

const MessageForm = props => {
    return (
        <div>
            <input placholder='Write your message here...'></input>
            <button className='ui small button'>Send to {props.thisPerson.first_name}</button>
        </div>
    )
}

export default MessageForm