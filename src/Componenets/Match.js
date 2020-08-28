import React from 'react'
import { Link } from 'react-router-dom'

const Match = props => {
    const person = props.users.find(person => person.id === props.id)
    if (!person) return <div></div>
    return (
        <div className='match'>
            <Link to={`/findmatches/${person.id}`}><img src={person.picture} alt={person.first_name} /></Link>
        </div>
    )
}

export default Match