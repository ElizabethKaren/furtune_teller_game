import React from 'react'

const SignInPage = props =>{
    return (
        <div className='ui form'>
            <div className='fields'>
            <div className='field'>
                <label>Email</label>
                <input type='text' placeholder='user@furtuneteller.com'></input>
            </div>
            <div className='field'>
                <label>Password</label>
                 <input type='password'></input>
            </div>
            <button className='ui small button'>Submit</button>
            </div>
        </div>
    )
}

export default SignInPage