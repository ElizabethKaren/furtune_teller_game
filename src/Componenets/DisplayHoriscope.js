import React from 'react'
import '../Styles/DisplayHoriscope.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const DisplayHoriscope = props => {
    if (props.sign === '') return <div>No Sign Yet</div>
    return (
        <div>
        <br></br>
        <br></br>
            <Nav sign={props.sign} birthday={props.birthday} />
            {/* <Link to='/'><img className='ui centered large image' src='https://i.pinimg.com/564x/38/5a/6e/385a6e0dd46e647453b29dfc4cd5c493.jpg' alt='fortune teller' /></Link> */}
            <Link to='/'><img className='ui centered large image' src='https://i.pinimg.com/564x/d8/89/4a/d8894afcc217255f7e08c59d9ef603f5.jpg' alt='fortune teller' /></Link>
        <br></br>
        <div id='centered' className='ui grid'>
        <Link to='/birthday'><div id='out-locaiton' className='back'><strong>X</strong></div></Link>
            <div className="twelve wide stretched column">
                <div className='"ui segment"'>
                <div className='ui black label'>
                    <h4><strong>{props.furtune}</strong></h4>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DisplayHoriscope