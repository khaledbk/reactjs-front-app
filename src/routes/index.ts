/**
 * @routes
 *
 * handle all app routes for react-router use
 *
 */
import { Home } from "../pages/home";
import { AdminDashboard } from "../pages/admin";
import { Login } from "../pages/login";
import { Managment } from "../pages/managment";
import React from "react";

export type AppRoute = {
  routeName: string;
  restrictedRoute: boolean;
  path: string;
  component: React.FC;
};

export const routes = [
  {
    routeName: "homeRoute",
    restrictedRoute: false,
    path: "/",
    component: Home,
  },
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
    component: AdminDashboard,
  },
  {
    routeName: "managmentRoute",
    restrictedRoute: true,
    path: "/managment",
    component: Managment,
  },
];
