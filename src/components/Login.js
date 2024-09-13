import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from '../style/Login.module.css'

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState('')

  const navigate = useNavigate();

  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorText('')

    if(!email || !password) {
      setErrorText('Email or password was not recieved')
      return 2;
    }
    else if (!auth) {
      setErrorText('Error with generating authentication token')
      return 3;
    }
    else if (password.length < 5) {
      setErrorText('Password must be atleast 5 characters long')
      return 4;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user + " signed in");

        setAuth(true)
        navigate('/')
        return 0
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorText(`Error ${errorCode}. Account could not be created.`)
        console.log(errorCode + " " + errorMessage);
        return 1
      });
  };

  return (
    <section className={styles.section}>
      <h1>Log in</h1>
      <p>Welcome back to Ghostshare</p>

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
          required
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
          required
          className={styles.input}
        />
        <br />
        <button className={styles.button} type="submit">Log in</button>
      </form>

      <p style={{color: 'red'}}>{errorText}</p>

      <button className={styles.navBtn} type="button" onClick={() => navigate('/create')}>Create Account Instead</button>
    </section>
  );
}

export default Login;
