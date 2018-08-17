import React, { Component } from 'react'
import Layout from '../component/Layout';
import './contact.css';

export default class Contact extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <body>

                        <div className="contact">
                            <h1>Get In Touch</h1>
                            <div className="row">

                                <div className="col-sm-4 pull-right">
                                    <div className="map">
                                        <a href="https://www.google.com/maps/dir/25.2764125,55.4182642/25.277225367379742,+55.41820440876613/@25.276889,55.4151805,17z/data=!3m1!4b1!4m8!4m7!1m1!4e1!1m3!2m2!1d55.4182044!2d25.2772254!3e0">

                                            <i className="material-icons pull-right" >add_location</i>
                                        </a>
                                    </div>
                                    <div className="col-sm-5 pull-right">
                                        <p style={{ "color": "red" }}>Building 23,Sheikzayed Road,Dubai</p>

                                    </div>
                                    <div className="col-sm-5">
                                        <i className="fa fa-envelope-o" style={{ "font-size": "20px", "color": "red" }}>ievent.com</i>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <i className="fa fa-phone" style={{ "font-size": "20px", "color": "red", "align": "center" }}></i>042325552
                             </div>
                        </div>


                    </body>

                </div>
            </Layout>
        )
    }
}
