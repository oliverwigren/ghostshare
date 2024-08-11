import React from "react";
import Post from "./Post";
//import styles from '../style/FeedArea.module.css'

function FeedArea({ posts }) {
  return (
    <>
      {posts.map((post, i) => (
        <Post postContent={post.text} key={'Post_' + i} />
      ))}
    </>
  );
}

export default FeedArea;
