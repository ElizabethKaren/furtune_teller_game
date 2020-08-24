import React from 'react'
import Match from './Match'

const FindYourMatch = props => {
    if (!props.sign) return <div><h1>No Sign</h1></div>
    const yourMatches = props.matches.filter(match => match.sign_id === props.sign.id)
    return (
        <div>
           {yourMatches.map(match => <Match key={match.id} {...match} users={props.users}/>) }
        </div>
    )
}

export default FindYourMatch