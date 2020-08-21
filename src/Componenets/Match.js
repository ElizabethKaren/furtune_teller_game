import React from 'react'
import { Link } from 'react-router-dom'

const Match = props => {
    const person = props.users.find(person => person.id === props.id)
    console.log(person)
    if (!person) return <div></div>
    return (
        <div>
            <h3>{person.first_name}</h3>
            <Link to={`/findmatches/${person.id}`}><img src={person.picture} alt={person.first_name} /></Link>
            <p>{person.location}</p>
        </div>
    )
}

export default Match