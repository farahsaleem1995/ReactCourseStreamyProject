import React from "react";

const StreamListItem = ({ stream }) => {
  return (
    <div className="item" style={{ padding: "10px" }}>
      <i className="huge middle aligned icon camera" />
      <div className="content">
        <h4>{stream.title}</h4>
        <p className="description">{stream.description}</p>
      </div>
    </div>
  );
};

export default StreamListItem;
