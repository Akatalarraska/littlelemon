import React from "react";
import small_logo from "../styles/small_logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <img src={small_logo} alt="Little Lemon Logo" className="footer-logo" />
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Navigation</h3>
                    <ul className="footer-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Contact</h3>
                    <ul className="footer-list">
                        <li>123 Lemon Street, Chicago</li>
                        <li>(312) 555-1234</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-title">Social Media</h3>
                    <ul className="footer-list">
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;