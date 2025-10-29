import React from 'react'
import "./Footer.css"
import logo from '../../assets/logo.jpg'
import account from '../../assets/account.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt=""/>
                <p>Built with passion, code, and a little bit of caffeine.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={account} alt=""/>
                    <input type="email" placeholder='Enter your email'></input>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 | Crafted by Aditya Tambadkar.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer