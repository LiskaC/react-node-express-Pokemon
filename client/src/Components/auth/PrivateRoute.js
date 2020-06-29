import React, { useReducer } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticate } from 'passport';

let isAuthenticated = false;
//make a service - put in another file


export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }}
    />

  )
}