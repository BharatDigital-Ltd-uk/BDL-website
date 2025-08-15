// MobileNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust path as needed
import './MobileNavbar.css';

const MobileNavbar = () => {
  return (
    <div className="d-block d-lg-none">
      <nav className="navbar mobile-logo-navbar fixed-top shadow-sm">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="BDL Logo" height="45" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
