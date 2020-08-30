import React from 'react'

const Animal = props => {
    console.log(props)
    return (
        <div>
            {props.animal}
            <img src={props.picture} alt={props.animal} /> 
        </div>
    )
}

export default Animal