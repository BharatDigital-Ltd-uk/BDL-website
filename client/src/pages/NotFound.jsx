import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NotFound = () => {
  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center px-3"
      style={{ gap: '2rem' }}
    >
      <div style={{ width: 1000, height: 500 }}>
        <DotLottieReact
          src="https://lottie.host/5ba15076-39a4-4a72-8f7c-dbe722ae0ddf/v2ZZqLtzTN.lottie"
          loop
          autoplay
        />
      </div>
      <Link to="/" className="btn btn-primary btn-lg rounded-pill">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
