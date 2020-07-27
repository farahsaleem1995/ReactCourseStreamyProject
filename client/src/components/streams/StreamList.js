import React from "react";
import { connect } from "react-redux";

import { fetchStreams } from "../../actions";
import StreamListItem from "./StreamListItem";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = (streams) => {
    return streams.map((stream) => (
      <StreamListItem key={stream.id} stream={stream} />
    ));
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList(this.props.streams)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
