import React from 'react'
import '../Styles/DisplayHoriscope.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Image from './Image'

const DisplayHoriscope = props => {
    console.log(props.sign)
    if (props.sign === '' || props.sign === null ) return (
        <div style={{ height: '100vh', backgroundColor: 'lightgrey' }}> 
            <Link to='/birthday'><div id='out-locaiton' className='back'><strong>X</strong></div></Link>
            <h2><strong>No Sign Yet</strong></h2>
        </div>
    ) 
    return (
        <div style={{ height: '100vh', backgroundColor: 'lightgrey' }}>
        <br></br>
        <br></br>
            <Nav sign={props.sign} birthday={props.birthday} />
        <br></br>
        <br></br>
        <div id='centered' className='ui grid'>
        <Link to='/birthday'><div id='out-locaiton' className='back'><strong>X</strong></div></Link>
            <div className="twelve wide stretched column">
                <div className='"ui segment"'>
                <div className='ui black label'>
                    <h3><strong>{props.furtune}</strong></h3>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DisplayHoriscope