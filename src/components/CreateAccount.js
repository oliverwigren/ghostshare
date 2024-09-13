import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from '../style/Login.module.css'

function CreateAccount({ isAuth, setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('')

  const navigate = useNavigate()

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

  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user + ' signed up!')

        setAuth(true)
        navigate('/')
        return 0
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage)
        setErrorText(`Error ${errorCode}. Account could not be created.`)
        return 1
      });
  };

  return (
    <section className={styles.section}>
      <h1>Create Account</h1>
      <p>Welcome to Ghostshare</p>

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
        /><br/><br/>
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
        /><br />
        <button className={styles.button} type="submit">Sign up </button>
      </form>

      <p style={{color: 'red'}}>{errorText}</p>

      <button className={styles.navBtn} type="button" onClick={() => navigate('/login')}>Login Instead</button>
    </section>
  );
}

export default CreateAccount;