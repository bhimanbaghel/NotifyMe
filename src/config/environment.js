/**
 * Environment Configuration
 * 
 * This file manages API URLs for different deployment environments:
 * - Local Development: http://localhost:5001/api or http://127.0.0.1:5001/api
 * - GitHub Pages: https://chubby-cities-leave.loca.lt/api (via localtunnel)
 */

export const API_CONFIG = {
  // GitHub Pages deployment
  GITHUB_PAGES: {
    hostname: 'bhimanbaghel.github.io',
    apiUrl: 'https://chubby-cities-leave.loca.lt/api'
  },
  
  // Local development fallback
  LOCAL: {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:5001/api'
  }
};

/**
 * Get the appropriate API URL based on the current environment
 * @returns {string} The API base URL
 */
export const getApiUrl = () => {
  // Check if running on GitHub Pages
  if (window.location.hostname === API_CONFIG.GITHUB_PAGES.hostname) {
    console.log('Environment: GitHub Pages');
    console.log('API URL:', API_CONFIG.GITHUB_PAGES.apiUrl);
    return API_CONFIG.GITHUB_PAGES.apiUrl;
  }
  
  // Default to local development
  console.log('Environment: Local Development');
  console.log('API URL:', API_CONFIG.LOCAL.apiUrl);
  return API_CONFIG.LOCAL.apiUrl;
};

/**
 * Check if running in production (GitHub Pages)
 * @returns {boolean}
 */
export const isProduction = () => {
  return window.location.hostname === API_CONFIG.GITHUB_PAGES.hostname;
};

export default { getApiUrl, isProduction, API_CONFIG }; 