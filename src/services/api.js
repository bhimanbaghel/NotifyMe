import axios from 'axios';
import { getApiUrl, isProduction } from '../config/environment';

// Create base headers
const baseHeaders = {
  'Content-Type': 'application/json',
};

// Add bypass headers only for production (GitHub Pages)
const headers = isProduction() 
  ? {
      ...baseHeaders,
      'bypass-tunnel-reminder': 'true',
      'User-Agent': 'NotifyMe-Frontend/1.0',
    }
  : baseHeaders;

// Create axios instance with default config
const api = axios.create({
  baseURL: getApiUrl(),
  headers: headers,
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

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle tunnel unavailable errors (503, 511)
    if (error.response && (error.response.status === 503 || error.response.status === 511)) {
      console.error('Tunnel unavailable or requires authentication. Please check the localtunnel connection.');
      
      // If in production and tunnel fails, you might want to:
      // 1. Show a user-friendly error message
      // 2. Retry with a different URL
      // 3. Fall back to a different backend service
      
      if (isProduction()) {
        throw new Error('Backend service temporarily unavailable. Please try again later.');
      }
    }
    
    return Promise.reject(error);
  }
);

// Auth services
export const authService = {
  login: (username, password) => {
    return api.post('/auth/login', { username, password });
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