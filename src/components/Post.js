import React from "react";
import style from "../style/Post.module.css";

function Post({ postContent, postDate }) {
  return (
    <div className={style.div}>
      <p className={style.text}>{postContent}</p>
      <p className={style.date}>
        {postDate.getDate() +
          "/" +
          (postDate.getMonth() + 1) +
          "/" +
          postDate.getFullYear()}
      </p>
    </div>
  );
}

export default Post;
