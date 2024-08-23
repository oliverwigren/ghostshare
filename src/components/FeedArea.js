import React from "react";
import Post from "./Post";
import { queryForPosts } from "./Firebase";
import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { postsQuery } from "./Firebase";
function FeedArea({ posts }) {
  const [p, sp] = useState([]);

  let unsubscribePosts

  useEffect(() => {
    unsubscribePosts = onSnapshot(postsQuery, (querySnapshot) => {
      sp(querySnapshot.docs.map((e) => e.data()));
    });
  }, []);

  return (
    <>
      {p.map((post, i) => (
        <Post postContent={post.text} key={"Post_" + i} />
      ))}
    </>
  );
}

export default FeedArea;
