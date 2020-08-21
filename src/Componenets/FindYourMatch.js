import React from 'react'

const FindYourMatch = props => {
    const yourMatches = props.maches.filter(match => match.sign_id === props.sign_id)
    console.log(yourMatches)
    return (
        <div>Match</div>
    )
}

export default FindYourMatch