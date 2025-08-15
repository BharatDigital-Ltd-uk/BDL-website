import React, { useState } from "react";
import "./ContactUs.css";
import map from "../assets/map.png";
import Toast from "./Toast.jsx";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false); // <-- New state for errors

  const backendURL = import.meta.env.VITE_RENDER_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSuccess(false);
  setError(false); // reset error state on new submit

  try {
    const res = await fetch(`${backendURL}/api/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData }),
    });

    const data = await res.json();

    if (res.ok) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // hide after 3s
    } else {
      console.error("Submission failed:", data);
      setError(true);
      setTimeout(() => setError(false), 3000); // hide after 3s
    }
  } catch (error) {
    console.error("Error:", error);
    setError(true);
    setTimeout(() => setError(false), 3000); // hide after 3s
  }

  setIsSubmitting(false);
};


  return (
    <section className="contact-section" id="contact">
      <div className="container py-5">
        <h2 className="contact-title fw-bold mb-4 pb-5 text-center">
          Contact Us
        </h2>
        <div className="glass-card p-4 p-md-5">
          <div className="row g-5 align-items-center">
            {/* Left: Form */}
            <div className="col-lg-6">
              <p className="text-muted mb-4 fs-6">
                We'd love to hear from you. Fill out the form and we'll be in
                touch shortly.
              </p>

              {success && (
                <Toast
                  type="success"
                  title="Success"
                  message="Message sent successfully!"
                  context="contact"
                  onClose={() => setSuccess(false)}
                />
              )}
              {error && (
                <Toast
                  type="error"
                  title="Error"
                  message="Failed to send message. Please try again."
                  context="contact"
                  onClose={() => setError(false)}
                />
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control shadow-sm"
                      rows="4"
                      placeholder="What do you have in mind?"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4 py-2 mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Right: Map */}
            <div className="col-lg-6 text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/search/Unit+1-I,+Romford+Road,+London,+England,+E12+6BT/@51.549696,0.035096,13z?hl=en"
              >
                <img
                  src={map}
                  alt="map"
                  className="img-fluid shadow-sm"
                  style={{
                    maxHeight: "400px",
                    width: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                    borderRadius: "1.5rem",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
