import React, { Component } from 'react'
import Layout from '../component/Layout'
import { createLogin } from '../helpers/network'

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    }
    updateVal = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitForm = async (e) => {
        e.preventDefault();
        this.setState({ error: null })
        try {
            let response = await createLogin({ email: this.state.email, password: this.state.password });
        alert(response.msg);
        } catch (e) {
            this.setState({
                error: e.email
            })
        }
    }
    render() {
        return (
            <Layout>
                <div>
                    <div className="row"><h2 className="text-center">New User Registration</h2></div>
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-4">
                            <form onSubmit={this.submitForm}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" onChange={this.updateVal} id="email" name="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" onChange={this.updateVal} id="password" name="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-default" >Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
