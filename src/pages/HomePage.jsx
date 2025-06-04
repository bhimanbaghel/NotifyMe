import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Never Miss Your Dream Job Again</h1>
          <p className="lead">
            Get notified when job positions open up at your favorite companies
          </p>
          <div className="mt-4">
            <Link to="/register" className="btn btn-light btn-lg me-2">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-outline-light btn-lg">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-bell-fill fs-1 text-primary"></i>
                </div>
                <h3 className="card-title">Real-time Notifications</h3>
                <p className="card-text">
                  Get instant notifications when new job positions open up at your selected companies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-building fs-1 text-primary"></i>
                </div>
                <h3 className="card-title">Track Multiple Companies</h3>
                <p className="card-text">
                  Monitor job openings at multiple companies simultaneously without checking each careers page.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-filter-circle fs-1 text-primary"></i>
                </div>
                <h3 className="card-title">Customized Filters</h3>
                <p className="card-text">
                  Set specific filters for job titles, departments, and locations that match your interests.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h2 className="mb-4">Ready to get started?</h2>
          <Link to="/register" className="btn btn-primary btn-lg">
            Create Your Account Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage; 