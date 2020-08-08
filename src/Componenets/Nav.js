import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
    return (
        <div>
           <NavLink to='/sign'><button>See Bday</button></NavLink>
        </div>
    )
}

export default Nav