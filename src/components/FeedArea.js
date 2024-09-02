import React from "react";
import Post from "./Post";
//import { queryForPosts } from "./Firebase";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { postsQuery } from "./Firebase";
function FeedArea() {
  const [posts, setPosts] = useState([]);

  let unsubscribePosts;

  useEffect(() => {
    unsubscribePosts = onSnapshot(postsQuery, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((e) => e.data()));
    });
  }, []);

  return (
    <>
      {posts.map((post, i) => (
        <Post postContent={post.text} postDate={post.date.toDate()} key={"Post_" + i} />
      ))}
    </>
  );
}

export default FeedArea;
