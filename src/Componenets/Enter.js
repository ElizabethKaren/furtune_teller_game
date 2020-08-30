import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Enter.css'

const Enter = props =>{
  return (
      <div className='centered'>
          <img src='https://i.pinimg.com/564x/fe/67/e2/fe67e28989bcb172e28008d5be29251d.jpg' alt='psychic' />
          <br></br>
          <div className='buttons'>
            <Link to='/birthday'><button className='ui secondary button'>Zodiac Sign</button></Link>
            <Link to='/palmreading' onClick={props.displayReading}><button className='ui secondary button'>Palm Reading</button></Link>
          </div>
      </div>
  )
}

export default Enter