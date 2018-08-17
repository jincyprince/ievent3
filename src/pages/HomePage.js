import React, { Component } from 'react'
import Layout from '../component/Layout'
import MailChimp from '../component/MailChimp';

import appstore from '../lib/AppStore.png';
import volleyball from '../lib/icons8-volleyball-filled-50.png';
import soccer from '../lib/icons8-soccer-filled-50.png';
import cricket from '../lib/icons8-cricket-filled-50.png';
import tennis from '../lib/icons8-tennis-racquet-filled-50.png';

export default class HomePage extends Component {
    render() {
        return (
            <Layout>
                <div className="container-fluid home-page">

                    <div className="row">
                        <div className="col-sm-1"> </div>

                        <div className="col-sm-3">
                            <p>
                                <h1 style={{ "font-size": "40px", "color": "black" }}>
                                    <strong> Organize and play sport games with friends in just a few clicks</strong>
                                </h1>
                            </p>
                            <p style={{ "font-size": "20px", "color": "black" }}>

                                Make an event using online calendar tool for time management and coordinating games.After the decision book a sport game
                            and play.
                </p>
                            <a href="/GetTogether">
                                <button type="button" className="btn btn-success btn-lg">Get Together</button>
                            </a>

                        </div>

                        <div className="col-sm-7">
                            <img src="http://www.worddive.com/blog/wp-content/uploads/2016/10/shutterstock_461423230.jpg" className="img" />
                        </div>
                        <div className="col-sm-1">
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-sm-5"></div>
                        <div className="col-sm-2 text-center">
                            <a href="https://www.apple.com/lae/ios/app-store/">
                                <img src={appstore} className="img" />
                            </a>
                        </div>
                        <div className="col-sm-5"></div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-sm-12">
                            <h1 align="center" style={{ "color": "black" }}>Book And Play</h1>
                        </div>
                    </div>

                    <div className="row sports">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2">
                            <a href="#">
                                <img src={volleyball} />
                            </a>
                        </div>
                        <div className="col-sm-2">
                            <a href="#">
                                <img src={soccer} />
                            </a>
                        </div>
                        <div className="col-sm-2">
                            <a href="#">
                                <img src={cricket} />

                            </a>
                        </div>
                        <div className="col-sm-2">
                            <a href="#">
                                <img src={tennis} />
                            </a>
                        </div>
                        <div className="col-sm-1">
                            <h1 style={{ "font-size": "15px;" }}>Follow Us</h1>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>


                    <div className="row">

                        <div className="col-sm-11 text-right pull-right col-sm-pull-1">

                            <a href="https://www.facebook.com/">
                                <i className="devicons devicon-facebook-plain colored"></i>
                            </a>
                            <a href="https://twitter.com/?lang=en">
                                <i className="devicons devicon-twitter-plain colored"></i>
                            </a>
                        </div>
                    </div>

                    <MailChimp />
                </div >
            </Layout>
        )
    }
}
