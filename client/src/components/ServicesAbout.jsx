import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaLaptopCode, FaNetworkWired, FaCogs, FaBullhorn, FaThumbsUp } from 'react-icons/fa';
import './ServicesAbout.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact'); // This updates the URL
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Slight delay to ensure Home page loads
  };
  const services = [
    {
      icon: <FaLaptopCode size={40} className="text-primary" />,
      title: 'Website Development',
      desc: 'We create dynamic and responsive websites tailored to meet your business needs.',
    },
    {
      icon: <FaNetworkWired size={40} className="text-primary" />,
      title: 'IT Support',
      desc: 'Our team ensures smooth IT operations with 24/7 technical support and maintenance.',
    },
    {
      icon: <FaCogs size={40} className="text-primary" />,
      title: 'Software Development',
      desc: 'We build scalable software solutions for businesses to enhance productivity and growth.',
    },
    {
      icon: <FaBullhorn size={40} className="text-primary" />,
      title: 'Digital Marketing',
      desc: 'We provide SEO, SEM, and social media marketing strategies to boost your brand visibility.',
    },
    {
      icon: <FaThumbsUp size={40} className="text-primary" />,
      title: 'Social Media Management',
      desc: 'We manage and grow your social media presence across all major platforms.',
    },
  ];

  return (
    <section className="bg-light py-5" style={{ background: "linear-gradient(to right, #f8fbff, #eef6fc)" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Our Services</h2>
        <Row className="g-4 justify-content-center">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card className="h-100 text-center shadow-sm border-0 rounded-4 p-3 bg-white hover-effect">
                <div className="mb-3">{service.icon}</div>
                <Card.Title className="fw-semibold">{service.title}</Card.Title>
                <Card.Text className="text-muted">{service.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action Button */}
        <div className="text-center mt-5">
            <button
                  onClick={handleContactClick}
                  className='btn btn-primary mt-4'
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '999px',
                    fontWeight: '500',
                    textDecoration: 'none',
                  }}
                >
                  Contact Us
                </button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
