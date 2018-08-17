import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn, userLogout } from '../helpers/authentication';

class Logout extends Component {
    state = {
        loggedin: null
    }
    componentDidMount() {
        this.setState({
            loggedin: isLoggedIn()
        })
        userLogout();
    }
    render() {
        return (
            // <Redirect to="/" />
            <div>{this.state.loggedin ? <Redirect to="/" /> : null}</div>
        )
    }
}
export default Logout;
