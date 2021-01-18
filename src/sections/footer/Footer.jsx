import React from 'react';
import './../../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__contacts">
                    <a href="tel:+380634953048">Tel: +380-63-495-30-48</a>
                    <a href="mailto: vsv@example.com">Email: serepanvovna@gmail.com</a>
                    <p>© Copyright 2019 Serhii Vovna | Page Pizzaproject</p>
                </div>
                <div className="footer__follow">
                    <h4>Follow us on: </h4>
                    <div className="footer__follow-inner">
                        <a href="#">
                            <i className="icon-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="icon-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="icon-telegram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <a href="#" className="back-to-top">
                <img src="images/arrow-up.png" alt="arrow-up" />
            </a>
        </footer>
    )
}

export default Footer;


