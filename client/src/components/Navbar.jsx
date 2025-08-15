import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png';
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    const handleNavClick = () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        new window.bootstrap.Collapse(navbarCollapse, { toggle: true }).hide();
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

return (
  <div className="d-none d-lg-block">
    <nav className="navbar navbar-expand-lg glassy-navbar fancy-navbar fixed-top shadow-sm">
      <div className="container-fluid px-4 d-flex align-items-center justify-content-between w-100">
        {/* Full Navbar on Desktop Only */}
        <div className="d-flex justify-content-between w-100 align-items-center">
          {/* Left: Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="BDL Logo" height="50" className="me-2" />
          </Link>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-end me-3" id="navbarNav">
            <ul className="navbar-nav gap-4 align-items-center">
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/">Home</Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown hover-dropdown">
                <span className="nav-link dropdown-toggle custom-link" id="servicesDropdown" role="button">
                  Services
                </span>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><Link className="dropdown-item nav-link" to="/website-development">Website Development</Link></li>
                  <li><Link className="dropdown-item nav-link" to="/digital-marketing">Digital Marketing</Link></li>
                  <li><Link className="dropdown-item nav-link" to="/software-development">Software Development</Link></li>
                  <li><Link className="dropdown-item nav-link" to="/it-support">IT Support</Link></li>
                  <li><Link className="dropdown-item nav-link" to="/social-media">Social Media Management</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/careers">Careers</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link custom-link" to="/about">About</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Contact Button */}
          <div className="contact-cta-wrapper">
            <HashLink smooth to="/#contact" className="btn btn-primary rounded-pill px-4 py-2">
              Contact
            </HashLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

};

export default Navbar;
