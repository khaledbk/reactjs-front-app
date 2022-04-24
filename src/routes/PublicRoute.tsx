import React from "react";

type PublicRouteProps = {
  Component: React.FC;
};

export const PublicRoute = ({ Component }: PublicRouteProps) => {
  return (
    <React.Fragment>
      <Component />
    </React.Fragment>
  );
};
