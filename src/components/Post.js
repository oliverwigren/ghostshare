import React from "react";
import style from '../style/Post.module.css'

function Post({postContent}) {
    return (
        <div className={style.div}>
            <p className={style.text}>{postContent}</p>
        </div>
    )
}

export default Post;