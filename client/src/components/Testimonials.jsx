import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonials.css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// ✅ Placeholder image (local)
import placeholderImg from '../assets/testimonials/placeholder-avatar.webp';

import avatarMale1 from '../assets/testimonials/avatar-male-1.webp';
import avatarMale2 from '../assets/testimonials/avatar-male-2.webp';
import avatarMale3 from '../assets/testimonials/avatar-male-3.webp';
import avatarMale4 from '../assets/testimonials/avatar-male-4.webp';
import avatarFemale1 from '../assets/testimonials/avatar-female-1.webp';
import avatarFemale2 from '../assets/testimonials/avatar-female-2.webp';

// ✅ Dummy fallback data (shown while loading or on fetch failure)
const FALLBACK_TESTIMONIALS = [
  {
    name: "Leslie Jones",
    role: "Freelance React Developer",
    img: avatarMale1,
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    stars: 5,
  },
  {
    name: "Jacob Jones",
    role: "Digital Marketer",
    img: avatarMale2,
    quote:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    stars: 4,
  },
  {
    name: "Jenny Wilson",
    role: "Graphic Designer",
    img: avatarFemale1,
    quote:
      "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
    stars: 5,
  },
  {
    name: "Albert Flores",
    role: "UX Designer",
    img: avatarMale3,
    quote:
      "Truly remarkable! It transformed the way we work and communicate with our customers. Highly recommended!",
    stars: 5,
  },
  {
    name: "Sara Connor",
    role: "Content Creator",
    img: avatarFemale2,
    quote:
      "This platform made managing our team effortless. The user experience is fantastic, and it saves us hours every week!",
    stars: 5,
  },
  {
    name: "Michael Brown",
    role: "Software Engineer",
    img: avatarMale4,
    quote:
      "A game-changer for productivity! Everything is seamless and well-designed. I can’t imagine working without it now.",
    stars: 5,
  },
];

// 🔧 Helper to safely normalize possible Strapi shapes
const normalizeStrapiItem = (item) => {
  // Handles both flat and attributes-based shapes
  const src = item?.attributes ? item.attributes : item || {};

  const imageUrl =
    // Strapi v4 media (populated): attributes.image.data.attributes.url
    src?.image?.data?.attributes?.url ??
    // Flat image object like { image: { url: '/uploads/...' } }
    src?.image?.url ??
    // Sometimes APIs expose 'img' directly
    src?.img ??
    '';

  const backend = import.meta.env.VITE_RENDER_BACKEND_URL || '';
  const absoluteImg = imageUrl?.startsWith('http')
    ? imageUrl
    : imageUrl
    ? `${backend}${imageUrl}`
    : '';

  return {
    id: item?.id,
    name: src?.name ?? 'Anonymous',
    role: src?.role ?? '',
    quote: src?.quote ?? '',
    stars: Number(src?.stars) > 0 ? Number(src?.stars) : 5,
    img: absoluteImg,
  };
};

const Testimonials = () => {
  // ✅ Start with fallback data immediately visible
  const [testimonials, setTestimonials] = useState(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    const backend = import.meta.env.VITE_RENDER_BACKEND_URL;
    if (!backend) {
      // No backend configured; keep showing fallback silently
      return;
    }

    const url = `${backend}/api/testimonials?populate=image`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Expecting data?.data to be an array
        const arr = Array.isArray(data?.data) ? data.data : [];
        const formatted = arr.map(normalizeStrapiItem).filter(Boolean);

        // If backend returned something valid, replace fallback
        if (formatted.length > 0) {
          setTestimonials(formatted);
        }
      })
      .catch((err) => {
        console.error('Error fetching testimonials:', err);
        // On error, keep showing the fallback data already in state
      });
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
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
                    {[...Array(t.stars || 5)].map((_, idx) => (
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
                    <div className="fw-bold">{t.name || 'Anonymous'}</div>
                    <div className="text-muted small">{t.role || ''}</div>
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
