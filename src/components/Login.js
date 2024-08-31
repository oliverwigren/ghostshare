import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from '../style/Login.module.css'

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user + " signed in");

        setAuth(true)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + " " + errorMessage);
      });
  };

  return (
    <section className={styles.section}>
      <h1></h1>
      <p></p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label><br/>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          autoComplete="off"
          className={styles.input}
        /><br/><br />
        <label htmlFor="password">Password</label><br/>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="off"
          className={styles.input}
        />
        <br />
        <button className={styles.button} type="submit">Log in</button>
      </form>

      <button className={styles.navBtn} type="button" onClick={() => navigate('/create')}>Create Account Instead</button>
    </section>
  );
}

export default Login;
