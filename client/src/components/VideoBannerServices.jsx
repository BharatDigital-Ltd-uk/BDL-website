import React, { useEffect, useRef, useState } from 'react';
import './VideoBannerServices.css';

const VideoBannerServices = ({ videoSrc, title, subtitle }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Load only once
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className="video-banner-container" ref={containerRef}>
      {isVisible && (
        <video
          ref={videoRef}
          className="video-banner"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="video-overlay-full">
        <div className="text-wrapper">
          <h1 className="banner-heading">{title}</h1>
          <p className="banner-subheading">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoBannerServices;
