import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';

export default class Layout extends Component {
    render(props) {
        return (
            <div className="container">
                <Header />
                {this.props.children} 
                <Footer />
            </div>
        )
    }
}
