// BottomNavbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { House, Briefcase, Info, Phone, Layers } from "lucide-react";
import ServicesDrawer from "./ServicesDrawer"; // ✅ Use drawer now
import "./BottomNavbar.css";

const BottomNavbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <nav className="bottom-navbar d-lg-none">
        <Link to="/" className="nav-item">
          <House size={20} />
          <span>Home</span>
        </Link>

        <button className="nav-item bg-transparent border-0" onClick={() => setShowDrawer(true)}>
          <Layers size={20} />
          <span>Services</span>
        </button>

        <HashLink smooth to="/#contact" className="nav-item">
          <Phone size={20} />
          <span>Contact</span>
        </HashLink>

        <Link to="/careers" className="nav-item">
          <Briefcase size={20} />
          <span>Careers</span>
        </Link>

        <Link to="/about" className="nav-item">
          <Info size={20} />
          <span>About</span>
        </Link>
      </nav>

      <ServicesDrawer show={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default BottomNavbar;
