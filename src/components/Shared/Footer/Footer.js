import React from "react"
import { Link } from "react-router-dom"

const Footer = () =>
    <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3" id="about">
                    <h5 className="text-uppercase">About Unicare Hospital</h5>
                    <p>Unicare Hospital is one of the best health care provider in the Bangladesh. We use all digital technology for diagnose disiese. We provide sercices with a minimam rate. Our goal is to provide quality service with trust.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Our Services</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/services">Dental</Link></li>
                        <li><Link to="/services">Skin</Link></li>
                        <li><Link to="/services">Guiney</Link></li>
                        <li><Link to="/services">Mental</Link></li>
                        <li><Link to="/services">Sergical</Link></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/">Doctors</Link></li>
                        <li><Link to="/">Bed</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">
            Copyright 2020 © <Link to="/">www.unicare.com</Link>
        </div>

    </footer>

export default Footer