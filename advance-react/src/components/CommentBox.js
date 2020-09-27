import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { saveComment } from "actions";

const CommentBox = ({ auth, saveComment, history }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!auth)
      history.push("/");
  }, [auth, history]);

  const onSubmit = (event) => {
    event.preventDefault();
    saveComment(comment);
    setComment("");
  };

  return (
    <form onSubmit={onSubmit}>
      <h4>Add a Comment</h4>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { saveComment })(CommentBox);
