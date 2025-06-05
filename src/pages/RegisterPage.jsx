import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getApiBaseUrl = () => {
    // Use local backend during development on port 5001
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:5001';
    }
    // Use ngrok tunnel for GitHub Pages testing
    // IMPORTANT: Replace 'your-ngrok-id.ngrok.io' with your actual ngrok URL in LoginPage.jsx as well
    if (window.location.hostname === 'bhimanbaghel.github.io') {
      return 'https://your-ngrok-id.ngrok.io'; 
    }
    // Default to relative path
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const apiBaseUrl = getApiBaseUrl();
      const response = await axios.post(
        `${apiBaseUrl}/api/auth/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.success) {
        setSuccessMessage(response.data.message || 'Registration successful! Please log in.');
        // Optionally, navigate to login page after a delay or directly
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Navigate after 2 seconds
      } else {
        setError(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || 
                       err.message || 
                       'Registration failed. Please try again.';
      setError(errorMsg);
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Sign Up</h2>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6" 
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength="6"
                  />
                </div>
                
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                  >
                    {loading ? 'Signing up...' : 'Sign Up'}
                  </button>
                </div>
              </form>
              
              <div className="text-center mt-3">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-none">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 