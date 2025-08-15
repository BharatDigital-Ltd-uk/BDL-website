// ServicesModal.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ServicesModal.css"; // Add styling if needed

const services = [
  { name: "Website Development", path: "/website-development" },
  { name: "IT Support", path: "/it-support" },
  { name: "Software Development", path: "/software-development" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Social Media Management", path: "/social-media-management" },
];

const ServicesModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="services-modal-overlay" onClick={onClose}>
      <div className="services-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Our Services</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <ul className="list-unstyled">
            {services.map((service) => (
              <li key={service.name} className="mb-3">
                <Link to={service.path} className="text-decoration-none text-dark" onClick={onClose}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;
