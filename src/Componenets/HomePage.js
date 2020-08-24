import React from 'react'
import '../Styles/HomePage.css'
import DisplayHoriscope from './DisplayHoriscope'
import SignInPage from './SignInPage'

const HomePage = (props) => {
    if (props.showSignIn) return <div><SignInPage/></div>
    if (props.birthday) return <div><DisplayHoriscope sign={props.sign}/></div>
    return (
        <div>
                {/* <img src='https://res.cloudinary.com/teepublic/image/private/s--SIVNWQIj--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_c8e0ec,e_outline:48/co_c8e0ec,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1577739990/production/designs/7399322_0.jpg' alt='fortune teller' /> */}
            <div className='centered'>
                <div className='ui form'>
                    <h3>Enter your date of birth</h3>
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
                                    {props.years.map((year, index) => <option key={index} value={props.year}>{year}</option>)}
                            </select>
                        </div>
                    </div>
                    <button className='ui small button' onClick={props.submitBirthday}>Submit Birthday</button>
                    <button className='ui small button' onClick={props.signIn}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage