import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let { currentUser } = useAuth();
  let location = useLocation();
  useEffect(() => {}, [JSON.stringify(currentUser)]);
  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
