import React from 'react';
import logoF from '../assets/logoF.png';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGoogle
} from "react-icons/fa";
import './Footer.css';


const FooterDesktop = () => {
  return (
    <footer className="text-white border-top border-secondary" style={{ backgroundColor: '#000' }}>
      <div className="pt-5">
        {/* Main Footer Row */}
        <div className="d-flex justify-content-evenly flex-wrap text-center text-md-start align-items-start">
          
          {/* 1. Company Info */}
          <div className="flex-fill mx-3 mb-4" style={{ minWidth: '250px', maxWidth: '300px' }}>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <img src={logoF} alt="BDL Logo" height="35" className="me-2" />
              <h6 className="fw-semibold mb-0">BHARAT DIGITAL</h6>
            </div>
            <p className="small mb-0" style={{ maxWidth: '300px', lineHeight: '1.4' }}>
              Providing end-to-end digital solutions for modern businesses to grow and thrive.
            </p>
            <div className="d-flex pt-4 justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-primary"><FaGoogle /></a>
              <a href="#" className="text-primary"><FaTwitter /></a>
              <a href="#" className="text-primary"><FaInstagram /></a>
              <a href="#" className="text-primary"><FaFacebookF /></a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex-fill mx-3 mb-4" style={{ minWidth: '200px', maxWidth: '250px' }}>
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small mb-0 quick-links">
              <li className="mb-2"><a href="/" className="text-decoration-none text-white">Home</a></li>
              <li className="mb-2"><a href="/#services" className="text-decoration-none text-white">Services</a></li>
              <li className="mb-2"><a href="/careers" className="text-decoration-none text-white">Careers</a></li>
              <li className="mb-2"><a href="/about" className="text-decoration-none text-white">About</a></li>
              <li><a href="/#contact" className="text-decoration-none text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="flex-fill mx-3 mb-4" style={{ minWidth: '250px', maxWidth: '300px' }}>
            <h6 className="fw-semibold mb-3">Contact Us</h6>
            <ul className="list-unstyled small mb-3">
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <FaPhoneAlt className="me-2 text-primary" />
                <span>02081295013</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <FaEnvelope className="me-2 text-primary" />
                <span>info@bharatdigital.co.uk</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <span>
                  Unit 1-I, 736-740 Romford Road, <br />
                  Manor Park, London, E12 6BT
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center small py-3 border-top border-secondary mt-3">
          &copy; {new Date().getFullYear()} Bharat Digital Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;
