import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "./firebase/auth";

export function CreateAccount() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user + ' signed up!')
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
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
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
    </section>
  );
}
