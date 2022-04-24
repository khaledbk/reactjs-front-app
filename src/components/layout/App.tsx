import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes, AppRoute } from "../../routes";
//import { Header } from "../header";
import map from "lodash/map";
import { AuthProvider } from "../../utils/auth/AuthProvider";
import { PrivateRoute } from "../../routes/PrivateRoute";
import { PublicRoute } from "../../routes/PublicRoute";
import { Container } from "react-bootstrap";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Container fluid>
          <Routes>
            {map(
              routes,
              (
                { component, path, restrictedRoute }: AppRoute,
                index: number
              ) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    restrictedRoute ? (
                      <PrivateRoute Component={component} />
                    ) : (
                      <PublicRoute Component={component} />
                    )
                  }
                />
              )
            )}
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
