import React from "react";
import HeaderArea from "./HeaderArea";
import { Outlet } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Root({ setAuth }) {
    const navigate = useNavigate()

  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAuth(false)
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <>
      <HeaderArea setAuth={setAuth} />
      <button type="button" onClick={handleClick}>
        Sign out
      </button>
      <Outlet />
    </>
  );
}

export default Root;
