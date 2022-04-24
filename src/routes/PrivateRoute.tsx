import React from "react";
import { RequireAuth } from "../utils/auth/RequireAuth";
import { Header } from "../components/header";
type PrivateRouteProps = {
  Component: React.FC;
};

export const PrivateRoute = ({ Component }: PrivateRouteProps) => {
  return (
    <RequireAuth>
      <React.Fragment>
        <Header />
        <Component />
      </React.Fragment>
    </RequireAuth>
  );
};
