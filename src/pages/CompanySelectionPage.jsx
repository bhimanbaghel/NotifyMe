import React from 'react';

const CompanySelectionPage = () => {
  const demoCompanies = [
    { id: 1, name: 'Google', logo: '🔍', description: 'Leading search engine and tech company' },
    { id: 2, name: 'Microsoft', logo: '🪟', description: 'Software and cloud computing company' },
    { id: 3, name: 'Apple', logo: '🍎', description: 'Consumer electronics and software company' },
    { id: 4, name: 'Amazon', logo: '📦', description: 'E-commerce and cloud computing company' },
    { id: 5, name: 'Meta', logo: '👤', description: 'Social media and technology company' },
    { id: 6, name: 'Netflix', logo: '🎬', description: 'Streaming service and content producer' }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">Select Companies to Track</h1>
      <div className="alert alert-info mb-4">
        Company selection functionality is under development. Check back soon!
      </div>
      
      <div className="row">
        {demoCompanies.map(company => (
          <div key={company.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="display-4 me-3">{company.logo}</div>
                  <h5 className="card-title mb-0">{company.name}</h5>
                </div>
                <p className="card-text">{company.description}</p>
              </div>
              <div className="card-footer bg-white border-top-0">
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={`company-${company.id}`}
                    disabled
                  />
                  <label className="form-check-label" htmlFor={`company-${company.id}`}>
                    Track job openings
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
        <button type="button" className="btn btn-primary btn-lg" disabled>
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default CompanySelectionPage; 