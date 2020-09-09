import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

const StreamList = ({ fetchStreams, streams, auth }) => {
  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const renderAdmin = (stream) => {
    if (stream.userId === auth.userId)
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      );
  };

  const renderStreams = () => {
    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">
              {stream.description}
            </div>
          </div>
        </div>
      );
    });
  };

  const renderCreateStreamButton = () => {
    if (auth.isSignedIn)
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {renderStreams()}
      </div>
      {renderCreateStreamButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    auth: state.auth
  };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
