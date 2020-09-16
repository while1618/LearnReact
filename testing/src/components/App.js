import React from "react";

import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default () => {
  return (
    <div className="ui container">
      <CommentBox />
      <CommentList />
    </div>
  );
};
