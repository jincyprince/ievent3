import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import Layout from '../component/Layout'
import Header from '../component/Header'
import Footer from '../component/Footer'
import './Book.css'

export default class Book extends Component {

    state = {
        city: '',
        sport: '',
        // date: '',
        // duration: '',
        // time: '',
        error: null,
        searched: false,
        authenticated: false,
        error: false
    };

    updateVal = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        // let _this = this;
        // $(ReactDOM.findDOMNode(this.refs.date)).on('changeDate', (e) => {
        //     _this.updateVal(e);
        // })
    }

    submitForm = async (e) => {
        e.preventDefault();
        if (!this.state.city) { alert('Select City'); return false; }
        else if (!this.state.sport) { alert('Select Sport'); return false; }
        // else if (!this.state.date) { alert('Select Date'); return false; }
        // else if (!this.state.duration) { alert('Select Duration'); return false; }
        // else if (!this.state.time) { alert('Select Time'); return false; }

        this.props.history.push('/showbooking?city=' + this.state.city + '&sport=' + this.state.sport)
        // return false;
    }

    render() {
        return (
            <Layout>
                {/* { this.state.authenticated === false && this.state.error === true ? <Redirect to="/users/login" /> : null } */}
                {/* {this.state.authenticated === false && this.state.error === false ? <div className="container book"> */}

                {this.state.searched === true ? <Redirect to="/bookingdata/:city/:sdf/rtert/" /> : <div className="container book">

                    <div className="h1 col-sm-offset-2">
                        <h1>Book and Play</h1>
                    </div>
                    <div className="book" >
                        <form onSubmit={this.submitForm} className="form-horizontal" >
                            <div className="form-group">
                                <label for="inputcity" className="col-sm-3 control-label">City</label>
                                <div className="col-sm-5">
                                    <select className="form-control" name="city" onChange={this.updateVal} >
                                        <option value="">-Select City-</option>
                                        <option>Abu Dhabi</option>
                                        <option>Dubai</option>
                                        <option>Sharjah</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputsports" className="col-sm-3 control-label">Sports</label>
                                <div className="col-sm-5">
                                    <select className="form-control" name="sport" onChange={this.updateVal}>
                                        <option value="">-Select Sport-</option>
                                        <option>VolleyBall</option>
                                        <option>Football</option>
                                        <option>Cricket</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-5 col-sm-6">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>}
            </Layout>
        )
    }
}
