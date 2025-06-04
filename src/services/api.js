import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('authToken');
    
    // If token exists, add to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  login: (email, password) => {
    return api.post('/auth/login', { email, password });
  },
  
  register: (userData) => {
    return api.post('/auth/register', userData);
  },
  
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userLoggedIn');
  },
};

// Company services
export const companyService = {
  getCompanies: () => {
    return api.get('/companies');
  },
  
  getCompanyById: (id) => {
    return api.get(`/companies/${id}`);
  },
};

// Job services
export const jobService = {
  getJobs: (filters = {}) => {
    return api.get('/jobs', { params: filters });
  },
  
  getJobById: (id) => {
    return api.get(`/jobs/${id}`);
  },
};

// Notification services
export const notificationService = {
  getNotifications: () => {
    return api.get('/notifications');
  },
  
  markAsRead: (id) => {
    return api.put(`/notifications/${id}/read`);
  },
};

// Preference services
export const preferenceService = {
  getPreferences: () => {
    return api.get('/preferences');
  },
  
  updatePreferences: (preferences) => {
    return api.put('/preferences', preferences);
  },
  
  addJobPreference: (preference) => {
    return api.post('/preferences/jobs', preference);
  },
  
  deleteJobPreference: (id) => {
    return api.delete(`/preferences/jobs/${id}`);
  },
};

export default api; 