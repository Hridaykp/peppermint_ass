import React from 'react';

const Jobs4you = ({ job }) => {
  return (
    <div className="job-listing">
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default Jobs4you;
