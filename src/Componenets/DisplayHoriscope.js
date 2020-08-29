import React from 'react'
import '../Styles/DisplayHoriscope.css'
import { Link } from 'react-router-dom'

const DisplayHoriscope = props => {
    if (!props.sign) return <div>No Sign Yet</div>
    return (
        <div>
        <div id='centered' className='ui grid'>
            <div className="twelve wide stretched column">
                <div className='ui black label'>
                <div className='"ui segment"'>
                    <h4><strong>{props.furtune}</strong></h4>
                    {/* <Link to='/findmatches'><button className='ui secondary button'>See My Matches</button></Link> */}
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DisplayHoriscope