import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>NotifyMe</h5>
            <p className="text-muted">
              Get notifications for job openings at your favorite companies.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-decoration-none text-light">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-decoration-none text-light">
                  Companies
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:support@notifyme.example" className="text-decoration-none text-light">
                  support@notifyme.example
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3 bg-secondary" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {currentYear} NotifyMe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 