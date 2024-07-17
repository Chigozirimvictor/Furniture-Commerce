import React, { useState } from 'react' 
import './Footer.css'

// import card_icon from '../Assets/Front End Standardization Test Design'
import ig_icon from '../Assets/ig_icon.png'
import fb_icon from '../Assets/fb_icon.png'
import tweet_icon from '../Assets/tweet_icon.png'
import tube_icon from '../Assets/tube_icon.png'
import Vector_2 from '../Assets/Vector-2.png'


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={Vector_2} alt="" />
                <p>BANDAGE</p>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social">
                <div className="icons">
                    <img src={ig_icon} alt="" />
                </div>
                <div className="icons">
                    <img src={fb_icon} alt="" />
                </div>
                <div className="icons">
                    <img src={tube_icon} alt="" />
                </div>
                <div className="icons">
                    <img src={tweet_icon} alt="" />
                </div>
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright @ 2023 - All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer