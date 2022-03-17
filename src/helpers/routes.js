import React, { Component } from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import * as ROUTE from "../constants/route";
import { UseAuthListener } from "../hooks";

export function IsUserRedirect({ Component }) {
  const auth = UseAuthListener();
  return auth.user ? <Navigate to={ROUTE.BROWSE} /> : Component;
}

export function ProtectedRoute({ Component }) {
  const auth = UseAuthListener();
  let location = useLocation();

  return auth.user ? (
    Component
  ) : (
    <Navigate to={ROUTE.SIGN_IN} state={{ from: location }} />
  );

  // <Route
  //   {...rest}
  //   render={({ location }) => {
  //     if (user) {
  //       return children;
  //     }

  //     if (!user) {
  //       return (
  //         <Navigate
  //           to={{
  //             pathname: "signin",
  //             state: { from: location },
  //           }}
  //         />
  //       );
  //     }

  //     return null;
  //   }}
  // />
}
