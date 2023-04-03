import { Navigate, useLocation } from "react-router-dom";

// this is Nashville Software School provided code provided as part of my E20 class capstone project to determine if a user is athorized.
export const Authorized = ({ children }) => {
  const location = useLocation();

  if (localStorage.getItem("crypto_user")) {
    return children;
  } else {
    return (
      <Navigate to={`/login/${location.search}`} replace state={{ location }} />
    );
  }
};
