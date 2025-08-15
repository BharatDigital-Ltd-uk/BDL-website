import React, { useEffect, useState } from 'react';
import './Career.css';
import careerVideo from '../assets/videos/career.webm';
import VideoBannerServices from '../components/VideoBannerServices';
import JobOpenings from '../components/JobOpenings';

const Career = () => {
  const [departments, setDepartments] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [activeKey, setActiveKey] = useState(null);
  const renderBackendUrl = import.meta.env.VITE_RENDER_BACKEND_URL || 'http://localhost:1337';

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  useEffect(() => {
    fetch(`${renderBackendUrl}/api/job-departments?populate[job_openings][populate]=*`)
      .then((res) => res.json())
      .then((data) => {
        const deptData = data.data.map((dept) => {
          const deptName = dept?.name || 'Unnamed Department';
          const deptSlug = dept?.slug || '';

          const jobList = (dept?.job_openings || []).map((job) => {
            const description = (job?.description || [])
              .flatMap(p => p?.children?.map(c => c?.text).filter(Boolean))
              .join(' ') || 'No description available.';

            const startDate = job?.startDate;
            const endDate = job?.endDate;
            const isActive = job?.isActive;

            return {
              id: job?.id,
              title: job?.title || 'No Title',
              description,
              startDate,
              endDate,
              isActive,
            };
          });

          return {
            name: deptName,
            slug: deptSlug,
            jobs: jobList,
          };
        });

        setDepartments(deptData);

        if (deptData.length > 0) {
          setActiveTab(deptData[0].name);
          setActiveKey(`${deptData[0].name}-0`);
        }
      })
      .catch((err) => console.error("Failed to load job data", err));
  }, []);

  const handleToggle = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
    setActiveKey(`${tabKey}-0`);
  };

  return (
    <div className="career-page">
      <VideoBannerServices
        videoSrc={careerVideo}
        title="Life At Bharat Digital"
        subtitle="A culture of innovation, growth, and purpose."
      />

      <div className="career-bottom-section">
        {/* Hiring Procedure Section */}
        <div className="container hiring-procedure-section">
          <h2 className="text-center fw-bold mb-4">Our Hiring Procedure</h2>
          <p className="text-center text-muted mb-5">
            Here are the steps of the selection process for hiring employees. Tell us about your skills and aspirations.
          </p>

          <div className="row justify-content-center text-center gx-4 gy-5">
            {[
              {
                title: "Select the Position you want to Apply",
                desc: "Choose a role that matches your skills and career goals.",
              },
              {
                title: "Panel Interview by Senior Members",
                desc: "Meet with senior team members for an in-depth assessment.",
              },
              {
                title: "Finalization of Hired Candidates",
                desc: "Final evaluation and selection of successful applicants.",
              },
            ].map((step, idx) => (
              <div key={idx} className="col-md-4 px-4 position-relative hiring-step">
                <div className="circle-number mb-3">{idx + 1}</div>
                <h5 className="fw-bold text-primary">{step.title}</h5>
                <p className="text-muted">{step.desc}</p>
                {idx < 2 && <div className="connector d-none d-md-block"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings Section (Moved to separate component) */}
        <JobOpenings
          departments={departments}
          activeTab={activeTab}
          activeKey={activeKey}
          onTabSelect={handleTabSelect}
          onToggle={handleToggle}
          formatDate={formatDate}
        />
      </div>
    </div>
  );
};

export default Career;
