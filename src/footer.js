import React from "react";
import './footer.css';
import email from './images/social/contact-us.png'
import facebook from './images/social/facebook.png'
import twitter from './images/social/twitter.png'
import insta from './images/social/instagram.png'
import spotify from './images/social/spotify.png'
import snap from './images/social/snapchat.png'

function Footer(){
    return (
        <div class="table">
            <ul id="social-footer">
                <a href="https://www.facebook.com/DilloDay">
                    <img src={facebook}  className="social"></img>
                </a>
                <a href="https://twitter.com/dillo_day">
                    <img src={twitter} className="social"></img>
                </a>
                <a href="https://www.instagram.com/dillo_day/">
                    <img src={insta} className="social"></img>
                </a>
                <a href="https://open.spotify.com/user/dillo_day">
                    <img src={spotify} className="social"></img>
                </a>
                <a href="https://www.snapchat.com/add/dilloday">
                    <img src={snap}  className="social"></img>
                </a>
            </ul>
        </div>
    );

}

export default Footer;