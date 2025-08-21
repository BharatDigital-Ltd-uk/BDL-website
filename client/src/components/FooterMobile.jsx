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

const FooterMobile = () => {
  return (
    <footer className="text-white border-top border-secondary pt-4" style={{ backgroundColor: '#000' }}>
      <div className="container text-center">

        {/* Company Info */}
        <div className="mb-4">
          <div className="d-flex justify-content-center align-items-center mb-2">
            <img src={logoF} alt="BDL Logo" height="30" className="me-2" />
            <h6 className="fw-semibold mb-0">BHARAT DIGITAL</h6>
          </div>
          <p className="small mb-2">
            Providing end-to-end digital solutions for modern businesses to grow and thrive.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="#" className="text-primary"><FaGoogle /></a>
            <a href="#" className="text-primary"><FaTwitter /></a>
            <a href="#" className="text-primary"><FaInstagram /></a>
            <a href="#" className="text-primary"><FaFacebookF /></a>
          </div>
        </div>

        {/* Quick Links & Contact Side-by-Side */}
        <div className="d-flex justify-content-between px-3 text-start" style={{ gap: '1rem' }}>
          {/* Quick Links */}
          <div>
            <h6 className="fw-semibold mb-2">Quick Links</h6>
            <ul className="list-unstyled small mb-0 quick-links">
              <li><a href="/" className="text-white text-decoration-none d-block mb-1">Home</a></li>
              <li><a href="/#services" className="text-white text-decoration-none d-block mb-1">Services</a></li>
              <li><a href="/careers" className="text-white text-decoration-none d-block mb-1">Careers</a></li>
              <li><a href="/about" className="text-white text-decoration-none d-block mb-1">About</a></li>
              <li><a href="/#contact" className="text-white text-decoration-none d-block">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="fw-semibold mb-2">Contact</h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2 d-flex align-items-start">
                <FaPhoneAlt className="me-2 text-primary mt-1" />
                <span>02081295013</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <FaEnvelope className="me-2 text-primary mt-1" />
                <span>info@bharatdigital.co.uk</span>
              </li>
              <li className="d-flex align-items-start">
                <FaMapMarkerAlt className="me-2 text-primary mt-1" />
                <span>
                  Unit 1-I, 736-740 Romford Road, <br />
                  Manor Park, London, E12 6BT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center small py-3 border-top border-secondary mt-4">
          &copy; {new Date().getFullYear()} Bharat Digital Ltd.
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
