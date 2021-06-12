import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Enter.css'
import Image from './Image'

const Enter = props => {
  return (
      <div className='centered'>
        <br></br>
        <br></br>
        <br></br>
       <Image /> 
          <br></br>
          <div className='buttons'>
            <Link to='/birthday'><button>Zodiac Sign</button></Link>
            <div className="divider"/>
            <Link to='/palmreading' onClick={props.displayReading}><button>Palm Reading</button></Link>
          </div>
      </div>
  )
}

export default Enter