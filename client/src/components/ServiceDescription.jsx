import React from 'react';
import './ServiceDescription.css'; // Assuming you have a CSS file for styles

const ServiceDescriptionSection = ({ title, description, features, image }) => {
  return (
    <section
      className="service-description-section"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        background: 'linear-gradient(to right, #eaf4ff, #f5faff)',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6">
            <h2 className="service-description-title fw-bold mb-3 text-dark">{title}</h2>
            <p className="text-secondary fs-5">{description}</p>

            <ul className="list-unstyled mt-4 text-secondary fs-5">
              {features.map((item, index) => (
                <li key={index} className="mb-3 d-flex align-items-start fs-5">
                  <span
                    className="me-3 mt-1 d-inline-flex justify-content-center align-items-center"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#0d6efd',
                      borderRadius: '50%',
                      color: '#fff',
                      fontSize: '0.8rem',
                    }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={image}
              alt="Service illustration"
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDescriptionSection;
