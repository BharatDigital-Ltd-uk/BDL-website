import React from 'react'
import './AboutBDL.css'
import aboutImg from '../assets/about-image.png';
import { useNavigate } from 'react-router-dom';

const AboutBDL = () => {

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact'); // This updates the URL
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Slight delay to ensure Home page loads
  };

  return (
    <div>
        <div className="about-container-fluid">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="about-heading fw-bold">About BDL</h2>
        </div>

        {/* Flex Layout */}
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
          {/* Text Section */}
          <div className="about-half px-4">
            <p className="about-text text-muted">
              Bharat Digital Limited (BDL) is a forward-thinking IT company dedicated to delivering transformative digital products and solutions.
            </p>
            <p className="about-text text-muted">
              From startups to enterprises, we partner with organizations to build powerful web platforms, engaging user interfaces, and secure IT systems that scale.
            </p>
            <p className="about-text text-muted">
              At BDL, innovation meets excellence, our team of passionate professionals continuously strives to harness emerging technologies to drive meaningful business outcomes.
            </p>



            {/* Contact Us Button */}
            <button
                  onClick={handleContactClick}
                  className='btn btn-primary mt-4'
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '999px',
                    fontWeight: '500',
                    textDecoration: 'none',
                  }}
                >
                  Contact Us
                </button>
          </div>

          {/* Image Section */}
          <div className="about-half text-center px-4">
            <img
              src={aboutImg}
              alt="About Bharat Digital Limited"
              className="about-img img-fluid rounded shadow-sm"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutBDL