import React from 'react'

const SignInPage = props =>{
    return (
        <div className='ui form'>
            <div className='fields'>
            <div className='field'>
                <label>Email</label>
                <input value={props.username} name='username' onChange={props.handleOnChange} type='text' placeholder='user@furtuneteller.com'></input>
            </div>
            <div className='field'>
                <label>Password</label>
                 <input value={props.password} name='password' onChange={props.handleOnChange} type='password'></input>
            </div>
        </div>
            <div className='field'>
                <button onClick={props.submitUser} className='ui small button'>Submit</button>
            </div>
        </div>
    )
}

export default SignInPage