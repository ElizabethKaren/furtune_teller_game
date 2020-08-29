import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    if (!props.sign) return <div></div>
    if (['A','E','I','O','U','Y'].includes(props.sign[0])) return <div className='ui black label'><h3>An {props.sign} I see...</h3></div>
    return (
        <div className='ui black label'>
            <h3>A {props.sign} I see...</h3>
        </div>
    )
}

export default Nav