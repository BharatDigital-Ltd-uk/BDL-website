import React from "react";
import "./CoreValues.css";

const coreValues = [
  {
    icon: "bi-lightbulb",
    title: "Innovation",
    description: "We embrace creativity and strive to bring cutting-edge solutions to every challenge we face.",
  },
  {
    icon: "bi-shield-check",
    title: "Integrity",
    description: "We uphold honesty and strong moral principles in every aspect of our work and partnerships.",
  },
  {
    icon: "bi-people",
    title: "Collaboration",
    description: "We believe in the power of teamwork, sharing knowledge and working together to achieve common goals.",
  },
  {
    icon: "bi-bar-chart",
    title: "Excellence",
    description: "We are committed to delivering the highest quality in everything we do.",
  },
  {
    icon: "bi-heart",
    title: "Customer Centricity",
    description: "Our clients are at the heart of every decision we make, ensuring their satisfaction and success.",
  },
  {
    icon: "bi-globe2",
    title: "Responsibility",
    description: "We act with accountability and contribute positively to society and the environment.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="core-values-section py-5" style={{ background: "linear-gradient(to right, #eaf4ff, #f5faff)" }}>
      <div className="container">
        <h2 className="fw-bold text-center text-dark mb-4">Our Core Values</h2>
        <div className="row g-4">
          {coreValues.map((value, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3 text-center">
                <div className="card-body">
                  <i className={`bi ${value.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="card-title fw-semibold">{value.title}</h5>
                  <p className="card-text text-muted small">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
