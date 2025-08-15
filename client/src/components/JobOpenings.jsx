// src/components/JobOpenings.jsx
import React from 'react';
import { useState } from 'react';
import { Tabs, Tab, Accordion } from 'react-bootstrap';
import ApplicationFormModal from './ApplicationFormModal.jsx';

const JobOpenings = ({ departments, activeTab, activeKey, onTabSelect, onToggle, formatDate }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');

  const handleApplyClick = (title) => {
    setSelectedJobTitle(title);
    setShowModal(true);
  };

  return (
    <div className="container mb-5">
      <h2 className="mb-4 pb-5 fw-bold text-center">Current Openings</h2>
      <Tabs activeKey={activeTab} onSelect={onTabSelect} className="mb-3 glassy-tabs">
        {departments.map((dept, i) => (
          <Tab eventKey={dept.name} title={dept.name} key={i}>
            <Accordion activeKey={activeKey}>
              {dept.jobs.map((job, index) => {
                const eventKey = `${dept.name}-${index}`;
                return (
                  <Accordion.Item eventKey={eventKey} key={eventKey} className="mb-3 glassy-accordion shadow-sm">
                    <Accordion.Header onClick={() => onToggle(eventKey)}>
                      {job.title}
                    </Accordion.Header>
                    <Accordion.Body>
                      {/* Job Meta Section */}
                      <div className="p-4 rounded-4 border shadow-sm bg-white mb-4">
                        <div className="row g-3">

                          {/* Start Date */}
                          <div className="col-md-4 d-flex align-items-center">
                            <span className="me-2 fw-semibold text-secondary">
                              <i className="bi bi-calendar-event me-1"></i>Start Date:
                            </span>
                            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                              {formatDate(job.startDate)}
                            </span>
                          </div>

                          {/* End Date */}
                          <div className="col-md-4 d-flex align-items-center">
                            <span className="me-2 fw-semibold text-secondary">
                              <i className="bi bi-calendar2-week me-1"></i>End Date:
                            </span>
                            <span className="badge bg-warning-subtle text-warning rounded-pill px-3 py-2">
                              {formatDate(job.endDate)}
                            </span>
                          </div>

                          {/* Status */}
                          <div className="col-md-4 d-flex align-items-center">
                            <span className="me-2 fw-semibold text-secondary">
                              <i className={`bi ${job.isActive ? 'bi-check-circle-fill' : 'bi-x-circle-fill'} me-1`}></i>Status:
                            </span>
                            <span className={`badge rounded-pill px-3 py-2 ${job.isActive ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                              {job.isActive ? 'Active' : 'Expired'}
                            </span>
                          </div>

                        </div>
                      </div>

                      {/* Job Description */}
                      <div className="mb-4" dangerouslySetInnerHTML={{ __html: job.description }} />

                        {/* Apply Button */}
                        {job.isActive && (
                        <div>
                            <button className="btn btn-primary px-4 py-2 rounded-pill" onClick={() => handleApplyClick(job.title)}>
                            Apply Now
                            </button>
                        </div>
                        )}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Tab>
        ))}
      </Tabs>
        <ApplicationFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        jobTitle={selectedJobTitle}
      />

    </div>
  );
};

export default JobOpenings;
