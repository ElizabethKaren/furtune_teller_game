import React from 'react'
import '../Styles/PalmReading.css'
import { Link } from 'react-router-dom'

const PalmReading = props => {
    if (props.displayReading) return (
    <div>
        <div className='palm-message'>
            <Link to='/' onClick={props.clearReading}><div className='back'><strong>X</strong></div></Link>
            <div className='ui black label'><h3>{props.fortune}</h3></div>
        </div>
    </div>
    )
    return (
        <div>
            <div className='palm-message'>
                <div className='ui black label'>
                    <h3>Place your Palm on The Computer Screen</h3>
                </div>
            </div>
        </div>
    )
}

export default PalmReading