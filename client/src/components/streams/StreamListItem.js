import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamListItem extends React.Component {
  renderAdmin() {
    if (this.props.currentUserId === this.props.stream.userId) {
      return (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${this.props.stream.id}`}
            className="ui button green"
          >
            EDIT
          </Link>
          <Link
            to={`/streams/delete/${this.props.stream.id}`}
            className="ui button red"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="item" style={{ padding: "10px" }}>
        {this.renderAdmin()}
        <i className="huge middle aligned icon camera" />
        <div className="content">
          <Link
            to={`streams/${this.props.stream.id}`}
            className="header"
            style={{
              fontSize: "20px",
              lineHeight: "32px",
            }}
          >
            {this.props.stream.title}
          </Link>
          <p className="description">{this.props.stream.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(StreamListItem);
