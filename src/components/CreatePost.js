import React, { useState } from "react";
import styles from "../style/CreatePost.module.css";
import { useNavigate } from "react-router-dom";
import { createPost } from './Firebase'

function CreatePost() {
  const [text, setText] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPosts((prev) => {
    //   return [{ text: e.target.input.value }, ...prev];
    // });

    createPost(text, 1)

    navigate('/')
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="input">Secret Message:</label>
        <br />
        <textarea id="input" type="text" required autoComplete="off" onChange={(e) => setText(e.target.value)} maxLength='100' className={styles.textarea} ></textarea>
        <br />
        <div className={styles.div}>
          <button type="submit" value={text} className={styles.submit + ' ' + styles.buttons}>Post</button>
          <button type="button" className={styles.goBack + ' ' + styles.buttons} onClick={() => navigate(-1)}>Go back</button>
        </div>
      </form>
    </>
  );
}

export default CreatePost;
