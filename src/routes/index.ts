/**
 * @routes
 *
 * handle all app routes for react-router use
 *
 */
import { Home } from "../pages/home";
import { AdminDashboard } from "../pages/admin";
import { Login } from "../pages/login";
import { Employee } from "../pages/employee";
import React from "react";

export type AppRoute = {
  routeName: string;
  restrictedRoute: boolean;
  path: string;
  component: React.FC;
};

export const routes = [
  {
    routeName: "loginRoute",
    restrictedRoute: false,
    path: "/login",
    component: Login,
  },
  {
    routeName: "profileRoute",
    restrictedRoute: true,
    path: "/profile",
    component: Employee,
  },
  {
    routeName: "adminDashboardRoute",
    restrictedRoute: true,
    path: "/admin",
    component: AdminDashboard,
  },
  {
    routeName: "homeRoute",
    restrictedRoute: false,
    path: "/",
    component: Home,
  },
];
