import React from 'react'
import '../Styles/DisplayHoriscope.css'

const DisplayHoriscope = props => {
    if (props.sign == '') return <div>No Sign Yet</div>
    return (
        <div>
            <br></br>
        <div id='centered' className='ui grid'>
            <div className="twelve wide stretched column">
                <div className='ui black label'>
                <div className='"ui segment"'>
                    <h4><strong>{props.furtune}</strong></h4>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DisplayHoriscope