import React from 'react';

const NotificationSettingsPage = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Notification Settings</h1>
      <div className="alert alert-info mb-4">
        Settings functionality is under development. Check back soon!
      </div>
      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-4">Email Notification Preferences</h5>
          
          <form>
            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="newJobCheck" 
                defaultChecked 
                disabled
              />
              <label className="form-check-label" htmlFor="newJobCheck">
                New job openings
              </label>
            </div>
            
            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="jobUpdateCheck" 
                defaultChecked 
                disabled
              />
              <label className="form-check-label" htmlFor="jobUpdateCheck">
                Updates to existing job postings
              </label>
            </div>
            
            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="weeklyDigestCheck" 
                defaultChecked 
                disabled
              />
              <label className="form-check-label" htmlFor="weeklyDigestCheck">
                Weekly digest of all relevant job openings
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled>
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettingsPage; 