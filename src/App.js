import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
// import {Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Book from './pages/Book';
import Users from './pages/Users';
import Logout from './pages/logout';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import ShowBooking from './pages/ShowBooking';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/BookPlay' component={Book} />
          <Route path='/users' component={Users} />
          <Route path='/logout' component={Logout} />
          <Route path="/signup" component={Signup}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/showbooking" component={ShowBooking}/>
        
        
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
