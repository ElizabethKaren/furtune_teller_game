import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Enter.css'
import Image from './Image'

const Enter = props =>{
  return (
      <div className='centered'>
        <br></br>
        <br></br>
        <br></br>
       <Image /> 
          {/* <img src='https://i.pinimg.com/564x/d8/89/4a/d8894afcc217255f7e08c59d9ef603f5.jpg' alt='psychic' /> */}
          <br></br>
          <div className='buttons'>
            <Link to='/birthday'><button className='ui secondary button'>Zodiac Sign</button></Link>
            <Link to='/palmreading' onClick={props.displayReading}><button className='ui secondary button'>Palm Reading</button></Link>
          </div>
      </div>
  )
}

export default Enter