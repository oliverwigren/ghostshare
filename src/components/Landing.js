import React from "react";
import { useNavigate } from "react-router-dom";
import image from '../images/logo512.png'

function Landing() {
  const navigate = useNavigate();

  return (
    <>
        <img src={image} />
      <button onClick={() => navigate('/login')} >Log in</button>
      <button onClick={() => navigate('/create')} >Create Account</button>
    </>
  );
}

export default Landing;
