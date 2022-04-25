import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes, AppRoute } from "../../routes";
//import { Header } from "../header";
import map from "lodash/map";
import { AuthProvider } from "../../utils/auth/AuthProvider";
import { PrivateRoute } from "../../routes/PrivateRoute";
import { PublicRoute } from "../../routes/PublicRoute";
import { SideBar } from "../sideBar";
//import { Header } from "../header";
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Layout hasSider>
          <SideBar />
          <Layout className="site-layout" style={{ minHeight: "100vh" }}>
            <Content
              className="site-layout-background"
              style={{ margin: 1, padding: 10, minHeight: 280, marginLeft: 0 }}
            >
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
            </Content>
          </Layout>
        </Layout>
      </div>
    </AuthProvider>
  );
}

export default App;
