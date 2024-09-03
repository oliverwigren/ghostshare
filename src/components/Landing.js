import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/logo512.png";
import styles from "../style/Landing.module.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <img src={image} className={styles.img} alt="Logo" />
      <div className={styles.div}>
        <button className={styles.button} onClick={() => navigate("/login")}>Log in</button>
        <button className={styles.button}  onClick={() => navigate("/create")}>Create Account</button>
      </div>
    </>
  );
}

export default Landing;
