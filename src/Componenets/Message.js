import React from 'react'

const Message = props => {
    const messageId = props.history.params.id
    const thisMessage = props.messages.find(message => message.id === messageId)
    const sender = props.user.find(user => user.id === thisMessage.sender_id)
    return (
        <div>
            {sender.first_name}
            {thisMessage.text} 
        </div>
    )
}

export default Message