import React, { Component } from 'react'
import './MailChimp.css'
export default class MailChimp extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-10 col-sm-push-1 col-sm-pull-1">
                    <div className="jumbotron">
                        <div id="mc_embed_signup">
                            <form
                                method="post"
                                action="https://github.us18.list-manage.com/subscribe/post?u=8cbdceacbfd93f86bf2aa3e0a&amp;id=5ad98c3043"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate" target="_blank" novalidate>
                                <div id="mc_embed_signup_scroll">
                                    <label for="mce-EMAIL">Subscribe</label>
                                    <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                    <div className="email-container" aria-hidden="true">
                                        <input type="text" name="b_8cbdceacbfd93f86bf2aa3e0a_5ad98c3043" tabindex="-1" value="" />
                                    </div>
                                    <div className="clear">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
