import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

const StreamShow = ({ fetchStream, match, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  if (!stream)
    return <div>Loading...</div>

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToStream = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToStream, { fetchStream })(StreamShow);
