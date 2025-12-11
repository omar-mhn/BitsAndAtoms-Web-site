/**
 * API Configuration
 * Centralized API endpoint management
 * Update this file to change API routes across the application
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Contact/Submissions
  CONTACT: `${API_BASE_URL}/contact`,
  
  // Add more endpoints as needed
  // USERS: `${API_BASE_URL}/users`,
  // PROJECTS: `${API_BASE_URL}/projects`,
};

export default API_BASE_URL;
