import React from 'react'
import '../Styles/Animal.css'
import { Link } from 'react-router-dom'

const Animal = props => {
    if (!props.animal) return (
        <div className='noSign'>
            <Link to='/birthday'><div id='location-back' className='back'><strong>X</strong></div></Link>
            <div className='ui black label'> No Sign</div>
        </div>
    )
    return (
        <div>
            <div id='chinesecenter'>
                <Link to='/birthday'><div id='location-back' className='back'><strong>X</strong></div></Link>
                <img className='ui medium image' src={props.picture} alt={props.animal} /> 
                <br></br>
                <div className='ui dark grey label'>
                    <h3>Year of the {props.animal}</h3>
                    <h4>{props.description}</h4>
                    <h4>Best Matches: {props.bestMatch.map(match => match + ', ' )}</h4>
                    <h4>Better to Avoid: {props.avoid.map(match => match + ', ' )}</h4>
                </div>
            </div>
        </div>
    )
}

export default Animal