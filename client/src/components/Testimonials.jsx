import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// ✅ Import your placeholder image from src/assets
// Adjust the filename/path if yours differs.
import placeholderImg from '../assets/placeholder-avatar.png';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_RENDER_BACKEND_URL}/api/testimonials?populate=image`)
      .then(res => res.json())
      .then(data => {
        if (data?.data) {
          const formatted = data.data.map(item => ({
            id: item.id,
            name: item.name,
            role: item.role,
            quote: item.quote,
            stars: item.stars,
            img: item.image
              ? item.image.url?.startsWith('http')
                ? item.image.url
                : `${import.meta.env.VITE_RENDER_BACKEND_URL}${item.image.url}`
              : ''
          }));
          setTestimonials(formatted);
        }
      })
      .catch(err => console.error('Error fetching testimonials:', err));
  }, []);

  // ====== Fix for loop flicker with few slides ======
  const slidesPerViewDesktop = 3;
  let adjustedTestimonials = testimonials;

  if (testimonials.length > 0 && testimonials.length < slidesPerViewDesktop * 2) {
    adjustedTestimonials = [...testimonials, ...testimonials];
  }

  return (
    <section className="" style={{ paddingBottom: '5rem' }}>
      <div className="testimonial-container text-center">
        <h1 className="testimonials-title fw-bold pb-5">
          Our happy clients say about us
        </h1>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          loop={true}
          loopedslides={adjustedTestimonials.length}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          speed={1500}
          grabCursor={true}
          allowTouchMove={true}
          centeredSlides={adjustedTestimonials.length > slidesPerViewDesktop}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            576: { slidesPerView: 1.3, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: slidesPerViewDesktop, spaceBetween: 30 },
          }}
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
        >
          {adjustedTestimonials.map((t, i) => (
            <SwiperSlide key={`${t.id || i}-${i}`} className="h-130 my-2">
              <div
                className="testimonial-card my-2 h-100 d-flex flex-column justify-content-between text-start"
                style={{
                  minHeight: '320px',
                  padding: '2rem',
                  gap: '1.5rem',
                }}
              >
                {/* Star Rating + Quote */}
                <div>
                  <div className="d-flex mb-5">
                    {[...Array(t.stars)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="#FDB241"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.75l-6 5.845 1.417 8.255L12 19.771 4.583 23.85 6 15.595 0 9.75l8.332-1.595z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    className="text-muted small mb-0"
                    style={{ lineHeight: '1.7', fontSize: '17px' }}
                  >
                    “{t.quote}”
                  </p>
                </div>

                {/* Avatar + Info */}
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={t.img || placeholderImg}
                    className="rounded-circle"
                    width="44"
                    height="44"
                    alt={t.name || 'Client avatar'}
                    onError={(e) => {
                      if (e.currentTarget.src !== placeholderImg) {
                        e.currentTarget.src = placeholderImg;
                      }
                    }}
                  />
                  <div className="ms-3 text-primary">
                    <div className="fw-bold">{t.name}</div>
                    <div className="text-muted small">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
