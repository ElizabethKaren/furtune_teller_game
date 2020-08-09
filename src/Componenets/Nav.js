import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
    if (!props.birthday) return <div></div>
    return (
        <div>
           <NavLink to='/sign'><button className='ui small button'>See Bday</button></NavLink>
        </div>
    )
}

export default Nav