import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

import PostItem from "./PostItem";

const PostList = ({ fetchPostsAndUsers, posts }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, [fetchPostsAndUsers]);

  const renderPosts = () => {
    return posts.map(post => {
      return <PostItem key={post.id} post={post} />;
    });
  }

  return (
    <div className="ui relaxed divided list">
      {renderPosts()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
