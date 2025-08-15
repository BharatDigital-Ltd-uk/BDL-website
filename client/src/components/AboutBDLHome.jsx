import React from 'react';
import './AboutBDLHome.css';
import aboutImg from '../assets/about-image.png';

const AboutBDLHome = () => {
  return (
    <div className='aboutBDLHome'>
      <h1 className="about-heading fw-bold mb-3 text-center">About Us</h1>
      <div className="about-wrapper">
        <div className="about-glass-card">
          {/* Flex Layout */}
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            
            {/* Image Section — now on top for mobile */}
            <div className="about-half text-center px-4 mb-4 mb-lg-0">
              <img
                src={aboutImg}
                alt="About Bharat Digital Limited"
                className="about-img img-fluid"
              />
            </div>

            {/* Text Section */}
            <div className="about-half px-4">
              <p className="about-text">
                Bharat Digital Limited (BDL) is a forward-thinking IT company dedicated to delivering transformative digital products and solutions.
              </p>
              <p className="about-text">
                From startups to enterprises, we partner with organizations to build powerful web platforms, engaging user interfaces, and secure IT systems that scale.
              </p>
              <p className="about-text">
                At BDL, innovation meets excellence, our team of passionate professionals continuously strives to harness emerging technologies to drive meaningful business outcomes.
              </p>

              {/* Contact Us Button */}
              <a className="about-btn btn mt-4" href="/about">
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBDLHome;
