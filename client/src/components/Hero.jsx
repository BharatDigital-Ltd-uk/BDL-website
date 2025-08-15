// import React, { Suspense, useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import './Hero.css';
// import ErrorBoundary from './ErrorBoundary';

// const LazySpline = React.lazy(() =>
//   import('@splinetool/react-spline').then((module) => ({
//     default: module.default,
//   }))
// );

// const HeroSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.7,
//   });

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 1000); // Change breakpoint if needed
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return (
//     <section
//       ref={ref}
//       style={{
//         position: 'relative',
//         width: '100%',
//         height: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background Visual */}
//       {inView && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             zIndex: 2,
//             pointerEvents: 'auto',
//             display: 'flex',
//           }}
//         >
//           {!isMobile && (
//           <ErrorBoundary>
//             <Suspense fallback={<div style={{ width: '100%', height: '100%', background: '#f0f0f0' }} />}>
//               <LazySpline
//                 scene="https://prod.spline.design/2CP1eB4NJzCQMrWE/scene.splinecode"
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                 }}
//               />
//             </Suspense>
//           </ErrorBoundary>
//         )}

//         </div>
//       )}

//       {/* Overlay Content */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           zIndex: 3,
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'flex-start',
//           padding: '0 5%',
//           pointerEvents: 'none',
//         }}
//       >
//         <div
//           style={{
//             maxWidth: '600px',
//             color: '#111827',
//             pointerEvents: 'auto',
//             padding: '1rem',
//           }}
//         >
//           <h1
//             className="hero-title fw-bold mb-4"
//             style={{
//               fontSize: '2.8rem',
//               lineHeight: '1.2',
//               marginBottom: '1rem',
//             }}
//           >
//             Transforming Ideas into Tech
//           </h1>
//           <p
//             style={{
//               fontSize: '1.1rem',
//               color: '#4B5563',
//               marginBottom: '2rem',
//             }}
//           >
//             Bharat Digital Limited provides end-to-end digital services to help businesses grow in the modern world.
//           </p>
//           <div
//             style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: '1rem',
//             }}
//           >
//           <a
//             href="#services"
//             style={{
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               padding: '0.75rem 1.5rem',
//               borderRadius: '999px',
//               fontWeight: '500',
//               textDecoration: 'none',
//               textAlign: 'center',
//               minWidth: '170px',
//               display: 'inline-block',
//             }}
//           >
//             Explore Services
//           </a>

//           <a
//             href="#contact"
//             style={{
//               border: '2px solid #3b82f6',
//               color: '#3b82f6',
//               padding: '0.75rem 1.5rem',
//               borderRadius: '999px',
//               fontWeight: '500',
//               textDecoration: 'none',
//               textAlign: 'center',
//               minWidth: '170px',
//               display: 'inline-block',
//             }}
//           >
//             Contact Us
//           </a>
//           </div>
//         </div>
//       </div>

//       {/* Responsive Text Styles */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             h1 {
//               font-size: 2rem !important;
//             }
//             p {
//               font-size: 1rem !important;
//             }
//             div[style*="display: flex"][style*="flex-wrap"] {
//               flex-direction: column;
//               align-items: stretch;
//             }
//           }

//           @media (max-width: 480px) {
//             h1 {
//               font-size: 1.7rem !important;
//             }
//             p {
//               font-size: 0.95rem !important;
//             }
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import heroImg from '../assets/Hero.webp';
import './Hero.css'

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      ref={ref}
      className="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '250px 5%',
        boxSizing: 'border-box',
      }}
    >
      {/* Left side content */}
      <div
        style={{
          maxWidth: '600px',
          color: '#111827',
          pointerEvents: 'auto',
          padding: '1rem',
          flex: '1 1 50%',
        }}
      >
        <h1
          className="hero-title fw-bold mb-4"
          style={{
            fontSize: '2.8rem',
            lineHeight: '1.2',
            marginBottom: '1rem',
          }}
        >
          Transforming Ideas into Tech
        </h1>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#4B5563',
            marginBottom: '2rem',
          }}
        >
          Bharat Digital Limited provides end-to-end digital services to help businesses grow in the modern world.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <a
            href="#services"
            className="hero-btn hero-btn-primary"
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              fontWeight: '500',
              textDecoration: 'none',
              textAlign: 'center',
              minWidth: '170px',
              display: 'inline-block',
            }}
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="hero-btn hero-btn-outline"
            style={{
              border: '2px solid #3b82f6',
              color: '#3b82f6',
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              fontWeight: '500',
              textDecoration: 'none',
              textAlign: 'center',
              minWidth: '170px',
              display: 'inline-block',
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Right side illustration image */}
      <div
        style={{
          flex: '1 1 50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          maxHeight: '90vh',
        }}
      >
        {inView && !isMobile && (
          <img
            src={heroImg} // Example illustration image
            alt="Illustration"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        )}
      </div>

      {/* Responsive Text Styles */}
      <style>
        {`
          @media (max-width: 1000px) {
            section {
              flex-direction: column;
              height: auto;
              padding: 2rem 5%;
            }

            section > div {
              flex: none;
              width: 100%;
              max-width: none;
              margin-bottom: 2rem;
            }

            section > div:last-child {
              margin-bottom: 0;
            }

            h1 {
              font-size: 2rem !important;
            }

            p {
              font-size: 1rem !important;
            }

            div[style*="display: flex"][style*="flex-wrap"] {
              flex-direction: column;
              align-items: stretch;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.7rem !important;
            }
            p {
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;


