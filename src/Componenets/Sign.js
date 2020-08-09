import React from 'react'

const Sign = props => {
    if (!props.birthday) return <div>No Sign Yet</div>
   return <div><h2>{props.birthday.month}</h2></div>
}

export default Sign