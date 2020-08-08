import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Sign from './Components/Sign'

export class App extends Component{

  state = {
    birthday: null
  }

  render(){
  return (
    <div className="App">
      <img src='https://res.cloudinary.com/teepublic/image/private/s--SIVNWQIj--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_c8e0ec,e_outline:48/co_c8e0ec,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1577739990/production/designs/7399322_0.jpg' alt='fortune teller' />
      <Switch>
        <Route path='/sign' render={()=> <Sign birthday={this.state.birthday}/>}/>
        <Route path='/' render={()=>}
      </Switch>
    </div>
   )
  }
}

export default App;
