import React, { useState } from "react";
import { connect } from "react-redux";

import { saveComment } from "actions";
import requireAuth from "components/requireAuth";

const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState("");

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

export default connect(null, { saveComment })(requireAuth(CommentBox));
