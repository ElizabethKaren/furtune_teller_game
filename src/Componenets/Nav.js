import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
    console.log(props.myMessages)
    if (!props.sign) return <div></div>
    if (['A','E','I','O','U','Y'].includes(props.sign[0])) return <div><h3>An {props.sign} I see...</h3>{props.myMessages.length > 0 ? <Link to='/horiscope/inbox'><button className='ui small button'>{props.myMessages.length} Messages</button></Link> : null }</div>
    return (
        <div>
            <h3>A {props.sign} I see...</h3>
           {props.myMessages.length > 0 ? <Link to='/horiscope/inbox'><button className='ui small button'>{props.myMessages.length} Messages</button></Link> : null }
        </div>
    )
}

export default Nav