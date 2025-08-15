import React, { useState } from "react";
import './ApplicationFormModal.css';
import { Modal, Button, Form } from "react-bootstrap";
import Toast from "./Toast";

const ApplicationFormModal = ({ show, handleClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastData, setToastData] = useState({
    show: false,
    type: "",
    message: "",
  });

  const renderBackendUrl = import.meta.env.VITE_RENDER_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const resumeForm = new FormData();
      resumeForm.append("files", formData.resume);

      const uploadRes = await fetch(`${renderBackendUrl}/api/upload`, {
        method: "POST",
        body: resumeForm,
      });

      const uploadData = await uploadRes.json();
      const uploadedFileId = uploadData[0]?.id;

      if (!uploadedFileId) throw new Error("Resume upload failed");

      const applicationData = {
        data: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          jobTitle: jobTitle,
          resume: uploadedFileId,
        },
      };

      const response = await fetch(`${renderBackendUrl}/api/job-applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setToastData({
          show: true,
          type: "success",
          message: "Application submitted successfully!",
        });
      } else {
        setToastData({
          show: true,
          type: "error",
          message:"Application submission failed.",
        });
      }

      // Close modal for both cases after 1.5s
      setTimeout(() => {
        setToastData({ show: false, type: "", message: "" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          resume: null,
        });
        handleClose();
      }, 1500);

    } catch (error) {
      console.error("Error:", error);
      setToastData({
        show: true,
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="application-modal" size="xl">
      <div className="application-modal-content wide">
        <button className="application-modal-close" onClick={handleClose}>×</button>

        <h2 className="application-modal-title">Apply for {jobTitle}</h2>
        <p className="application-modal-subtext">
          Fill out this form, and we will forward your information to the hiring manager!
        </p>

        {toastData.show && (
          <Toast
            type={toastData.type}
            context="application"
            message={toastData.message}
            onClose={() => setToastData({ show: false, type: "", message: "" })}
          />
        )}

        <Form onSubmit={handleSubmit} className="application-form">

          {/* Row 1: First Name & Last Name */}
          <div className="form-row-grid">
            <Form.Group controlId="firstName">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label className="form-label">Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                required
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="form-row-grid">
            <Form.Group controlId="email">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                required
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label className="form-label">Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                className="form-control"
                value={formData.phone}
                required
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          {/* Row 3: Resume (full width) */}
          <Form.Group controlId="resume" className="resume-group">
            <Form.Label className="form-label">Upload Resume</Form.Label>
            <Form.Control
              type="file"
              name="resume"
              className="form-control"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="primary" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default ApplicationFormModal;
