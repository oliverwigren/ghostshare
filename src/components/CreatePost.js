import React from "react";
import styles from "../style/CreatePost.module.css";
import { useNavigate } from "react-router-dom";

function CreatePost({ setPosts }) {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts((prev) => {
      return [{ text: e.target.input.value }, ...prev];
    });
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
        <button className={styles.goBack} onClick={() => navigate(-1)}>Go back</button>
      </form>
    </>
  );
}

export default CreatePost;
