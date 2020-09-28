import React, { useState } from "react";
import { connect } from "react-redux";

import { saveComment, fetchComments } from "actions";
import requireAuth from "components/requireAuth";

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    saveComment(comment);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <div>
          <button>Save Comment</button>
        </div>
      </form>
      <button onClick={() => fetchComments()}>Fetch Comments</button>
    </div>
  );
};

export default connect(null, { saveComment, fetchComments })(requireAuth(CommentBox));
