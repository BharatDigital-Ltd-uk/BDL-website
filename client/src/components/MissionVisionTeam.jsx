import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";
import "./MissionVisionTeam.css"; // Import the CSS file

const teamMembers = [
  {
    name: "Aarav Sharma",
    position: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Verma",
    position: "Chief Technology Officer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Mehta",
    position: "Head of Marketing",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const MissionVisionTeam = () => {
  return (
    <section className="py-5" style={{ background: "linear-gradient(to right, #f8fbff, #eef6fc)" }}>
      <div className="container">

        {/* Section Title */}
        <h2 className="fw-bold text-center mb-5 text-dark">Our Mission and Vision</h2>

        {/* Mission and Vision */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="p-4 shadow-sm bg-white rounded-4 h-100 hover-effect">
              <div className="mb-3 text-primary fs-2"><FaBullseye /></div>
              <h4 className="fw-semibold mb-2">Our Mission</h4>
              <p className="text-muted mb-0">
                To empower businesses through digital innovation, delivering smart, scalable, and secure solutions that drive success in a connected world.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 shadow-sm bg-white rounded-4 h-100 hover-effect">
              <div className="mb-3 text-primary fs-2"><FaEye /></div>
              <h4 className="fw-semibold mb-2">Our Vision</h4>
              <p className="text-muted mb-0">
                To be a global leader in IT services, revolutionizing how businesses operate digitally and contributing to a smarter, more connected future.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-center mb-3 text-dark">Our Team</h2>
          <p className="text-muted">
            Meet the people driving innovation at Bharat Digital Limited.
          </p>
        </div>

        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div className="col-sm-6 col-md-4" key={index}>
              <div className="bg-white rounded-4 shadow-sm text-center p-3 h-100 hover-effect">
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-circle mb-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-1">{member.name}</h6>
                <p className="text-muted small mb-0">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionVisionTeam;
