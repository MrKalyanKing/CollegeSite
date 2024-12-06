import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
