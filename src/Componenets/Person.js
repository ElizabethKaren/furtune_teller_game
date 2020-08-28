import React from 'react'
import MessageForm from './MessageForm'

const Person = props => {
    const thisId = props.history.match.params.id
    const thisPerson = props.users.find(user => user.id === parseInt(thisId))
    if (!thisPerson) return <div>Loading...</div>
    return (
        <div>
            <h1>{thisPerson.sign}</h1>
            <h2>{thisPerson.first_name} {thisPerson.last_name}</h2>
            <h2>{thisPerson.bio}</h2>
            <img src={thisPerson.picture} alt={thisPerson.first_name} /> 
            <h3>{thisPerson.occupation} in {thisPerson.location}</h3>
            <button className='ui secondary button' onClick={props.messageBubleAppear}>Message {thisPerson.first_name}</button>
            {props.showMessage ? <MessageForm thisPerson={thisPerson} /> : null }
        </div>
    )
}

export default Person