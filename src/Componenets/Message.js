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
            <img className='ui small image' src={sender.picture} alt={sender.first_name} />
            {sender.first_name}
            {thisMessage.text} 
            <button onClick={(messageId)=> props.onReply(messageId)} className='ui secondary button'>Reply</button>
        </div>
    )
}

export default Message