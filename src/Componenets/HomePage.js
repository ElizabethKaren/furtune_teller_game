import React from 'react'

const HomePage = (props) => {
    return (
    <div>
        <h1>Enter your date of birth</h1>
        <select name='month' onChange={props.handleOnChange}>
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
        <select name='date' onChange={props.handleOnChange}>
            {Array.from({length: 31}, (v, k) => k+1).map((date, index) => <option name='date' key={index} value={date}>{date}</option>)}
        </select>
           <input name='year' onChange={props.handleOnChange} name='year' value={props.year} />
           <br></br>
           <button className='ui button' onClick={props.submitBirthday}>Submit Birthday</button>
    </div>
    )
}

export default HomePage