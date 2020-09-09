import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = ({ fetchStream, deleteStream, match, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, [fetchStream, match.params.id]);

  const renderActions = () => {
    return (
      <Fragment>
        <button onClick={() => deleteStream(match.params.id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </Fragment>
    );
  };

  const renderContent = () => {
    if (!stream)
      return "Loading...";
    return `Are you sure you want to delete stream with title: ${stream.title}`;
  }

  return (
    <Modal
      title="Delete a Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
