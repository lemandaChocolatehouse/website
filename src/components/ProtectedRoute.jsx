import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext"; // Assume AuthContext is properly set up

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext); // Check if user is authenticated

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/signin" />;
  }

  // Otherwise, render the children components
  return children;
};

export default ProtectedRoute;

