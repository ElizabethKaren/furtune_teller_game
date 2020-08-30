import React from 'react'
import '../Styles/Animal.css'

const Animal = props => {
    if (!props.animal) return <div className='ui black label'>No Sign</div>
    return (
        <div id='chinesecenter'>
            <img className='ui medium image' src={props.picture} alt={props.animal} /> 
            <div className='ui black label'>
                <h2>Year of the {props.animal}</h2>
                <h3>{props.description}</h3>
                <h4>Best Matches: {props.bestMatch.map(match => match + ', ' )}</h4>
                <h4>Better to Avoid: {props.avoid.map(match => match + ', ' )}</h4>
            </div>
        </div>
    )
}

export default Animal