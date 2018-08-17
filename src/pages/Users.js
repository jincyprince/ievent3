import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import { isLoggedIn } from '../helpers/authentication';
import HomePage from './HomePage';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="" render={
                    (props) => {
                        if (isLoggedIn()) { return <HomePage /> }
                        return <Login />
                    }
                } />
            </Switch>
        );
    }
}

export default App;
