import React from 'react'
import '../Styles/DisplayHoriscope.css'

const DisplayHoriscope = props => {
    console.log(props.sign)
    if (!props.sign) return <div>No Sign Yet</div>
    return (
        <div id='centered' className='ui grid'>
            <div className="twelve wide stretched column">
                <div className='"ui segment"'>
                    <h4>{props.sign.furtune}</h4>
                </div>
            </div>
        </div>
    )
}

export default DisplayHoriscope