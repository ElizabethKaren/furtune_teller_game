import React from 'react'
import { Link } from 'react-router-dom'

const SignInPage = props =>{
    return (
        <div className='ui form'>
            <div className='fields'>
            <div className='field'>
                <input value={props.username} name='username' onChange={props.handleOnChange} type='text' placeholder='your_email@furtuneteller.com'></input>
            </div>
            <div className='field'>
                 <input value={props.password} name='password' onChange={props.handleOnChange} placeholder='password' type='password'></input>
            </div>
        </div>
            <div className='field'>
                <Link to='/findmatches' onClick={props.submitUser}><button className='ui secondary button'>Submit</button></Link>
            </div>
        </div>
    )
}

export default SignInPage