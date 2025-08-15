import React, { Suspense, lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ServicesHome.css';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

import webImg from '../assets/web.png';
import socialImg from '../assets/social.png';
import digitalImg from '../assets/digital.png';
import itImg from '../assets/IT.png';
import softImg from '../assets/soft.png';
import { Link } from "react-router-dom";

function ServicesHome() {
const settings = {
  infinite: true,
  arrows: true, 
  speed: 1500,
  autoplaySpeed: 3000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "30px", // adds spacing around the card
      }
    }
  ]
};

  return (
    <div className="services-section" id="services">
      
      {/* Suspense fallback shown while Spline is loading */}
      {/* <Suspense fallback={<div className="spline-loading"></div>}>
        <Spline 
          className="spline-background"
          scene="https://prod.spline.design/dBxyhwjxOZcOqHwL/scene.splinecode" 
        />
      </Suspense> */}

      {/* Content */}
      <div className="container mb-5 mb-md-3 content-overlay">
        <h1 className="fw-bold services-title">Services</h1>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="px-2 h-100">
              <div className="card m-2 shadow-sm mx-auto custom-card h-100">
                <img
                  src={d.img}
                  alt={d.name}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title text-primary fw-semibold mb-2">
                      {d.name}
                    </h5>
                    <p className="card-text text-muted small pt-2">
                      {d.review}
                    </p>
                  </div>
                  <Link to={d.link} className="mt-auto text-center">
                  <button className="btn btn-primary mt-3 w-50 mx-auto p-2 rounded-pill">
                    Explore
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Website Development",
    img: webImg,
    review: "Build modern, responsive websites tailored to your business needs and goals.",
    link: "/website-development"
  },
  {
    name: "Software Development",
    img: softImg,
    review: "Custom software solutions designed to automate and streamline your operations.",
    link: "/software-development"
  },
  {
    name: "Digital Marketing",
    img: digitalImg,
    review: "Boost your brand visibility through targeted digital marketing strategies.",
    link: "/digital-marketing"
  },
  {
    name: "Social Media Management",
    img: socialImg,
    review: "Grow your online presence with professional social media content and campaigns.",
    link: "/social-media"
  },
  {
    name: "IT Support",
    img: itImg,
    review: "Reliable and timely IT support to keep your business running smoothly.",
    link: "/it-support"
  }
];

export default ServicesHome;
