import React from "react";
import "./VideoSliderAbout.css";
import slide1 from "../assets/videos/slide1.webm";
import slide2 from "../assets/videos/slide2.webm";

const VideoSliderAbout = () => {
  return (
    <div id="videoCarousel" className="carousel slide carousel-fade custom-slider-wrapper" data-bs-ride="carousel">
      <div className="carousel-inner video-carousel-container rounded-4">
        <div className="carousel-item active custom-slide">
          <video
          src={slide1}
          autoPlay
          muted
          playsInline
          className="custom-video"
          onEnded={() => document.querySelector('#videoCarousel')?.querySelector('.carousel-control-next')?.click()}
        />

          <div className="custom-overlay-text"></div>
        </div>
        <div className="carousel-item custom-slide">
          <video
            src={slide2}
            autoPlay
            muted
            playsInline
            className="custom-video"
            onEnded={() => document.querySelector('#videoCarousel')?.querySelector('.carousel-control-next')?.click()}
          />

          <div className="custom-overlay-text"></div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default VideoSliderAbout;
