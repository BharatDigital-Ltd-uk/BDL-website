import React from "react";
import "./ServiceFeatureSection.css"; // Import the CSS file

const ServiceFeatureSection = ({ sectionTitle, services }) => {
  return (
    <section className="py-5 px-5" style={{ background: "linear-gradient(to right, #eaf4ff, #f5faff)" }}>
      <div className="service-feature-container">
        <h1 className="service-feature-title fw-bold text-center mb-4 text-dark" style={{fontSize: '2rem'}}>{sectionTitle}</h1>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3 hover-effect">
                <div className="card-body text-center">
                  <i className={`bi ${service.icon} text-primary fs-1 mb-3`}></i>
                  <h5 className="card-title fw-semibold">{service.title}</h5>
                  <p className="card-text text-muted small">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureSection;
