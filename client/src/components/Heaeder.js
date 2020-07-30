import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="ui item">
          <div>
            <button className="ui gray button tiny">New Stream</button>
          </div>
        </Link>
      );
    }
  };

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item" style={{ marginLeft: "50px" }}>
          <div>
            <button className="ui violet button">Streamy</button>
          </div>
        </Link>

        <div className="right menu" style={{ marginRight: "50px" }}>
          <Link to="/" className="ui item">
            <div>
              <button className="ui gray button tiny">All Streams</button>
            </div>
          </Link>
          {this.renderCreate()}
          <div className="ui item">
            <GoogleAuth />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(Header);
