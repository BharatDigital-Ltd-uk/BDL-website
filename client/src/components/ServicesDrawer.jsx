// ServicesDrawer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ServicesDrawer.css"; // CSS comes next

const services = [
  { name: "Website Development", path: "/website-development" },
  { name: "IT Support", path: "/it-support" },
  { name: "Software Development", path: "/software-development" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Social Media Management", path: "/social-media-management" },
  { name: "CAD Services", path: "/cad-services" },
];

const ServicesDrawer = ({ show, onClose }) => {
  return (
    <div className={`services-drawer-overlay ${show ? "show" : ""}`} onClick={onClose}>
      <div className="services-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Our Services</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>
        <div className="drawer-body">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.path}
              className="drawer-link"
              onClick={onClose}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDrawer;
