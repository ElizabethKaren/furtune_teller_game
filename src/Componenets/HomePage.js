import React from 'react'
import '../Styles/HomePage.css'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const HomePage = (props) => {
    return (
        <div>
            <br></br>
            <br></br>
            <Nav sign={props.sign} birthday={props.birthday} />
            <Link to='/'><img className='ui centered large image' src='https://i.pinimg.com/564x/d8/89/4a/d8894afcc217255f7e08c59d9ef603f5.jpg' alt='fortune teller' /></Link>
            <div className='centered'>
                <div className='ui form'>
                    <div className='fields'>
                        <div className='field'>
                            <select className="ui fluid search dropdown" name='month' onChange={props.handleOnChange}>
                                <option>Month</option>
                                <option value='jan'>Jan</option>
                                <option value='feb'>Feb</option>
                                <option value='march'>March</option>
                                <option value='april'>April</option>
                                <option value='may'>May</option>
                                <option value='june'>June</option>
                                <option value='july'>July</option>
                                <option value='aug'>Aug</option>
                                <option value='sept'>Sept</option>
                                <option value='oct'>Oct</option>
                                <option value='nov'>Nov</option>
                                <option value='dec'>Dec</option>
                            </select>
                        </div>
                        <div className='field'>
                            <select className="ui fluid search dropdown" name='day' onChange={props.handleOnChange}>
                                <option>Day</option>
                                {Array.from({length: 31}, (v, k) => k+1).map((date, index) => <option name='day' key={index} value={date}>{date}</option>)}
                            </select>
                        </div>
                        <div className='field'>
                            <select className="ui fluid search dropdown" name='year' onChange={props.handleOnChange}>
                                    <option>Year</option>
                                    {props.years.map((year, index) => <option name='year' key={index} value={year}>{year}</option>)}
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <Link to='/horiscope' onClick={props.submitBirthday}><button className='ui secondary button'>Western Zodiac</button></Link>
                        <Link to='/animal' onClick={props.submitBirthday}><button className='ui secondary button'>Chinese Zodiac</button></Link>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default HomePage