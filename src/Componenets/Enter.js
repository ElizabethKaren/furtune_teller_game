import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Enter.css'

const Enter = props =>{
  return (
      <div className='centered'>
        <br></br>
        <br></br>
        <br></br>
        <img src="https://i.pinimg.com/564x/38/5a/6e/385a6e0dd46e647453b29dfc4cd5c493.jpg" alt='zoltar'/>
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