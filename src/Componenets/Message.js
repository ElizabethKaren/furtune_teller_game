import React from 'react'

const Message = props => {
    console.log(props.history)
    const messageId = parseInt(props.history.match.params.id)
    console.log(messageId)
    const thisMessage = props.messages.find(message => message.id === messageId)
    console.log(thisMessage)
    const sender = props.users.find(user => user.id === thisMessage.sender_id)
    console.log(sender)
    return (
        <div>
            {sender.first_name}
            {thisMessage.text} 
        </div>
    )
}

export default Message