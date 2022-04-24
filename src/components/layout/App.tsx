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

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          {map(
            routes,
            ({ component, path, restrictedRoute }: AppRoute, index: number) => (
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
      </div>
    </AuthProvider>
  );
}

export default App;
