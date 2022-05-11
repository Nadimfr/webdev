import React from "react";
import Login from "../../components/Login/login";
import { Outlet } from "react-router";
import * as AuthenticationService from "../apis/auth";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ redirectPath = "/", children }) => {
  if (AuthenticationService.isUserLoggedIn()) {
    return <Outlet />;
  } else {
    return <Navigate to={redirectPath} replace />;
  }
};

export default ProtectedRoutes;