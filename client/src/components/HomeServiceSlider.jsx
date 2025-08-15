import React from "react";
import "./HomeServiceSlider.css"; // External CSS for styling

const images = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
];

const HomeServiceSlider = () => {
  return (
    <div className="HomeServiceSlider">
      <div className="HomeServiceSlider-track">
        {[...images, ...images].map((src, index) => (
          <div className="HomeServiceSlide" key={index}>
            <img src={src} alt={`HomeServiceSlide ${index + 1}`} height="100" width="250" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServiceSlider;
