import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_Container bg-dark">
            <div className="container">
                <div className="row pt-5 pb-3">
                    <div className="col-lg-4 mt-4">
                        <div className="footer_content">
                            <h2>Tanha Health Care</h2>
                            <p>We have included the latest technologies of medical equipment and other
                            logistic supports world class Ambulance, well furnished , CCU etc</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="footer_content">
                            <h2>Our Services</h2>
                            <p>Welcome to Tanha Health Care Hospital.We provide better technology, quality diagnosis and better treatment in an economic and reliable cost for you.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="footer_content">
                            <h2>Contact us</h2>
                            <p>DHAKA - TANGAIL HIGHWAY , SHAFIPUR BAZAR, KALIAKAIR, GAZIPUR</p>
                            <p>(+88) 01722-450094 , <br /> Mobile: 01972-450094</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-light" />
            <div className="copywrite text-center text-light">
                <p className="mb-0 pb-3">© 2021 - Tanha Health Care </p>
            </div>
        </div>
    );
};

export default Footer;