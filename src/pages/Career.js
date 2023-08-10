import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Jobs4you from '../components/jobs4you';

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobOpenings = [
      {
        title: 'backend developer',
        description: 'developing the backend or server side application',
      },
      {
        title: 'frontend developer',
        description:  'developing the backend or server side application',
      },
      {
        title: 'SDE-1',
        description:  'developing the backend or server side application',
      },
      {
        title: 'SDE-2',
        description:  'developing the backend or server side application',
      },
      {
        title: 'PHP developer',
        description: 'developing the backend or server side application',
      },
      {
        title: '.Net developer',
        description:  'developing the backend or server side application',
      },

    ];

    setJobs(jobOpenings);
  }, []);

  return (
    <div className="careers-page">
      <Header />
      <section className="jobs4you">
        {jobs.map((job, index) => (
          <Jobs4you key={index} job={job} />
        ))}
      </section>
    </div>
  );
};

export default Careers;
