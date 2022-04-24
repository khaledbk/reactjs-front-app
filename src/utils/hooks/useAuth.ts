import React from "react";
import { AuthContext } from "../auth";

export const useAuth = () => {
  return React.useContext(AuthContext);
};
