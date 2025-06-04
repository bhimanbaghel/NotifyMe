import React from 'react';

const DashboardPage = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Your Dashboard</h1>
      <div className="alert alert-info">
        Dashboard functionality is under development. Check back soon!
      </div>
      
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Recent Notifications</h5>
            </div>
            <div className="card-body">
              <p className="text-muted">No notifications yet.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Your Job Preferences</h5>
            </div>
            <div className="card-body">
              <p className="text-muted">No job preferences set up yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 