import React from "react";
import styles from "../style/CreatePost.module.css";
import { useNavigate } from "react-router-dom";
import { createPost } from './Firebase'

function CreatePost({ setPosts }) {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPosts((prev) => {
    //   return [{ text: e.target.input.value }, ...prev];
    // });

    createPost(e.target.input.value, 1)

    navigate('/')
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="input">Message:</label>
        <br />
        <input id="input" type="text" required autoComplete="off"></input>
        <button type="submit" className={styles.submit}>Post</button>
        <br />
        <button type="button" className={styles.goBack} onClick={() => navigate(-1)}>Go back</button>
      </form>
    </>
  );
}

export default CreatePost;
