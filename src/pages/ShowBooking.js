import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import queryString from 'query-string'

import Layout from '../component/Layout'

import { showBooking } from '../helpers/network';
import { createBooking } from '../helpers/network';

const $ = window.$;

export default class ShowBooking extends Component {
    state = {
        city: '',
        sport: '',
        school: '',
        schools: []
    }

    updateVal = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitForm = async (e) => {
        e.preventDefault();
        if (!this.state.school) { alert('Select School'); return false; }
        else if (!this.state.date) { alert('Select Date'); return false; }
        else if (!this.state.duration) { alert('Select Duration'); return false; }
        else if (!this.state.time) { alert('Select Time'); return false; }
        try {
            const response = await createBooking({
                city: this.state.city,
                sports: this.state.sport,
                school: this.state.school,
                date: this.state.date,
                duration: this.state.duration,
                time: this.state.time
            })
            this.props.history.push('/')
            alert("Booked Successfully");
            // console.log(this.state.schools);
        } catch (e) {
            // userLogout();
            // this.setState({
            //     error: true,
            //     authenticated: false
            // })
        }
        // return false;
    }

    async  componentDidMount() {
        let _this = this;
        $(ReactDOM.findDOMNode(this.refs.date)).on('changeDate', (e) => {
            _this.updateVal(e);
        })

        let qs = queryString.parse(this.props.location.search);
        this.setState(qs);
        try {
            const response = await showBooking(qs);
            this.setState({
                schools: response
                // authenticated: true
            });
            // console.log(this.state.schools);
        } catch (e) {
            // userLogout();
            // this.setState({
            //     error: true,
            //     authenticated: false
            // })
        }
    }

    render() {
        return (
            <Layout>
                {/* {this.state.school}
                {this.state.city}
                {this.state.sport}
                {this.state.date}
                {this.state.duration}
                {this.state.time} */}

                <div className="jumbotron col-sm-offset-2">
                    <h1>Book and Play</h1>
                </div>
                <div className="book" >
                    <form onSubmit={this.submitForm} className="form-horizontal" >
                        <div className="form-group">
                            <label for="inputcity" className="col-sm-3 control-label">City</label>
                            <div className="col-sm-5">
                                <input className="form-control" name="city" value={this.state.city} readOnly />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputsports" className="col-sm-3 control-label">Sports</label>
                            <div className="col-sm-5">
                                <input className="form-control" name="sport" value={this.state.sport} readOnly />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputcity" className="col-sm-3 control-label">School</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="school" onChange={this.updateVal} >
                                    <option value="">-Select School-</option>
                                    {this.state.schools ? this.state.schools.map(sch => <option>{sch.name}</option>) : null}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputsports" className="col-sm-3 control-label">Date</label>
                            <div className="col-sm-5">
                                <div ref="date" className="input-group date">
                                    <input ref="myDate" type="text" className="form-control" data-provide="datepicker" name="date" onChange={this.updateVal} placeholder="Select Date" />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-th"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputsports" className="col-sm-3 control-label">Duration</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="duration" onChange={this.updateVal}>
                                    <option value="">-Select Duration-</option>
                                    <option>1hr</option>
                                    <option>2hrs</option>
                                    <option>3hrs</option>
                                    <option>4hrs</option>
                                    <option>5hrs</option>
                                    <option>6hrs</option>
                                    <option>7hrs</option>

                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="inputsports" className="col-sm-3 control-label">Time</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="time" onChange={this.updateVal}>
                                    <option value="">-Select Time-</option>
                                    <option>8.00</option>
                                    <option>9.00</option>
                                    <option>10.00</option>
                                    <option>11.00</option>
                                    <option>12.00</option>
                                    <option>13.00</option>
                                    <option>14.00</option>

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
            </Layout >
        )
    }
}
