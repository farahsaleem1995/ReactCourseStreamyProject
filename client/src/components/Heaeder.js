import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
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
        <Link to="/streams/new" className="ui item">
          <div>
            <button className="ui gray button tiny">New Stream</button>
          </div>
        </Link>
        <div className="ui item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
