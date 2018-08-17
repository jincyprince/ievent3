import React, { Component } from 'react'
import './HeaderNavigation.css'
import logo from '../lib/logo.jpg';
import { isLoggedIn, userInfo } from '../helpers/authentication';

export default class HeaderNavigation extends Component {
    state = {
        username: '',
        authenticated: false
    };

    componentDidMount() {
        this.setState({
            username: userInfo(),
            authenticated: isLoggedIn()
        })
    }

    render() {
        return (
            <nav className="navbar navbar-default header-navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="/">
                            <img src={logo} height="50" />
                        </a>
                    </div>
                    <ul className="nav navbar-nav">

                        <li>
                            <a href="/BookPlay" className="my-nav">Book and Play</a>
                        </li>
                        <li className="dropdown">
                            <a href="#" data-toggle="dropdown" className="dropdown-toggle my-nav">Our Centers</a>
                            <ul className="dropdown-menu js-our-centers-menu">
                                <li>
                                    <a href="http://kings-edu.com/albarsha/campus/">Kings School Al Barsha</a>
                                </li>
                                <li>
                                    <a href="http://kings-edu.com/nadalsheba/campus/">Kings School Nad Al Sheba</a>
                                </li>
                                <li>
                                    <a href="http://kings-edu.com/dubai/">Kings School Dubai</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/Contact" className="my-nav">Contact Us</a>
                        </li>
                    </ul>
                    {this.state.authenticated === false ?
                        <ul className="sign pull-right">
                            <a href="/users/login" className="btn btn-primary btn-md my-button-1">Sign In</a>
                            <a href="/signup" className="btn btn-primary btn-md my-button-1">Sign Up</a>
                        </ul>
                        : <ul className="sign pull-right">
                            {this.state.username}
                            <a href="/logout" className="btn btn-primary btn-md my-button-1">logout</a>
                        </ul>}
                </div>
            </nav>

        )
    }
}
