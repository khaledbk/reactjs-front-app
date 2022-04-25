import React from "react";
import { RequireAuth } from "../utils/auth/RequireAuth";
type PrivateRouteProps = {
  Component: React.FC;
};

export const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  return (
    <RequireAuth>
      <React.Fragment>
        <Component />
      </React.Fragment>
    </RequireAuth>
  );
};
