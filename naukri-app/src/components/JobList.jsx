import React from 'react';
import ig1 from '../assets/adidas.png';  // Adidas logo
import ig2 from "../assets/amazon.png";  // Amazon logo
import ig3 from "../assets/intel.png";  // Intel logo
import ig4 from "../assets/coca-cola.webp";  // Coca-Cola logo

import "./JobList.css";

const jobs = [
  { id: 1, title: 'Software Engineer', company: 'Google', location: 'Remote' },
  { id: 2, title: 'Frontend Developer', company: 'Facebook', location: 'New York' },
  { id: 3, title: 'Product Manager', company: 'Amazon', location: 'Seattle' },
  { id: 4, title: 'Data Scientist', company: 'Microsoft', location: 'Redmond' },
];

// Define a function to map the company to the appropriate logo
const getCompanyLogo = (company) => {
  switch (company) {
    case 'Google':
      return ig1;  // Replace with actual Google logo image if available
    case 'Facebook':
      return ig2;  // Replace with actual Facebook logo image if available
    case 'Amazon':
      return ig3;  // Replace with Amazon logo
    case 'Microsoft':
      return ig4;  // Replace with Microsoft logo
    default:
      return ig5;  // Default logo (Coca-Cola)
  }
};

function JobList({ searchQuery = '' }) {
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="job-list">
      {filteredJobs.length > 0 ? (
        filteredJobs.map(job => (
          <div key={job.id} className="job-item">
            <img src={getCompanyLogo(job.company)} alt="Company Logo" className="company-logo" />
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </div>
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
}

export default JobList;
