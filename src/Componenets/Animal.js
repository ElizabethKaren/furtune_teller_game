import React from 'react'
import '../Styles/Animal.css'
import { Link } from 'react-router-dom'

const Animal = props => {
    if (!props.animal) return <div className='noSign'><div className='ui black label'> No Sign</div></div>
    return (
        <div className='backGroundChange'>
            <div id='chinesecenter'>
                <Link to='/birthday'><div id='location-back' className='back'><strong>X</strong></div></Link>
                <img className='ui medium image' src={props.picture} alt={props.animal} /> 
                <br></br><br></br>
                <div className='ui dark grey label'>
                    <h2>Year of the {props.animal}</h2>
                    <h3>{props.description}</h3>
                    <h4>Best Matches: {props.bestMatch.map(match => match + ', ' )}</h4>
                    <h4>Better to Avoid: {props.avoid.map(match => match + ', ' )}</h4>
                </div>
            </div>
        </div>
    )
}

export default Animal