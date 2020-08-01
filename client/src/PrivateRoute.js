import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.authenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect to="/" state={props.location} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
