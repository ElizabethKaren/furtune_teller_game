import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = props => {
    if (!props.birthday) return <div></div>
    if (['A','E','I','O','U','Y'].includes(props.sign[0])) return <div><h3>An {props.sign} I see...</h3></div>
    return (
        <div>
            <h3>A {props.sign} I see...</h3>
        </div>
    )
}

export default Nav