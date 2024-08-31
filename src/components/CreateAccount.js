import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function CreateAccount({ isAuth, setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user + ' signed up!')

        setAuth(true)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage)
      });
  };

  return (
    <section>
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
        /><br/>
        <label htmlFor="password">Password</label><br/>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          autoComplete="off"
        />
        <button type="submit">Sign up </button>
      </form>

      <button type="button" onClick={() => navigate('/login')}>Login Instead</button>
    </section>
  );
}

export default CreateAccount;