import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";
import Spinner from "./Spinner";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1035041933907-3qrmo3oaqqnppqc1hesihaqtqu0016sc.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    switch (this.props.isSignedIn) {
      case true:
        return (
          <button
            onClick={this.handleSignOutClick}
            className="ui red google button tiny"
          >
            <i className="google icon" />
            Sign Out
          </button>
        );

      case false:
        return (
          <button
            onClick={this.handleSignInClick}
            className="ui red inverted google button tiny"
          >
            <i className="google icon" />
            Sign In
          </button>
        );

      default:
        return <Spinner />;
    }
  }

  handleSignInClick = () => {
    this.auth.signIn();
  };

  handleSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);
