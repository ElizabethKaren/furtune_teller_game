import React from 'react'

const DisplayHoriscope = props => {
    console.log(props.sign)
    if (!props.sign) return <div>No Sign Yet</div>
    return (
        <div><h3>{props.sign.furtune}</h3></div>
    )
}

export default DisplayHoriscope