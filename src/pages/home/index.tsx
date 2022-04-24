import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";

export const Home = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div>
      {currentUser ? (
        <div>
          Connected ? {currentUser?.username} / {currentUser?.email}{" "}
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          This is a Home page here
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </div>
  );
};
