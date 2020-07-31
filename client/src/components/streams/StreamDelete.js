import React from "react";
import { connect } from "react-redux";

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent = () => {
    if (!this.props.stream) {
      return "...";
    }

    return `Are you want to delete stream "${this.props.stream.title}"`;
  };

  renderAction = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button red"
        >
          Delete
        </button>
        <button onClick={() => history.goBack()} className="ui button white">
          Cancel
        </button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss={() => history.goBack()}
      />
    );
  }
}

const mapSTateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapSTateToProps, {
  fetchStream,
  deleteStream,
})(StreamDelete);
