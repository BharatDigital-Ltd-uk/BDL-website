import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero.jsx';
import Testimonials from '../components/Testimonials.jsx';
import HomeServiceSlider from '../components/HomeServiceSlider.jsx';
import ContactUs from '../components/ContactUs.jsx';
import ServicesHome from '../components/ServicesHome.jsx';
import AboutBDLHome from '../components/AboutBDLHome.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx'; // 📦 New import
import './Home.css';
import ribbonVideo from '../assets/videos/Ribbon.webm';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{background: 'linear-gradient(to right, #eaf4ff, #f5faff)'}}>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <HomeServiceSlider />
      </ErrorBoundary>

      {/* {showVideo && (
        <div className="video-fixed-background-wrapper" aria-hidden="true">
          <video
            className="video-fixed-background"
            src={ribbonVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
      )} */}

      <div className="video-section-wrapper">
        <div className="video-content-overlay">
          <ErrorBoundary>
            <ServicesHome />
          </ErrorBoundary>
          <ErrorBoundary>
            <AboutBDLHome />
          </ErrorBoundary>
          <ErrorBoundary>
            <Testimonials />
          </ErrorBoundary>
        </div>
      </div>

      <ErrorBoundary>
        <ContactUs />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
