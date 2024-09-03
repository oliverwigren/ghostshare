import React from "react";
import { Outlet } from "react-router-dom";

function Root2() {
  const style = {
    textAlign: "center",
    color: "white",
    backgroundColor: "blue",
    padding: "30px 0",
    margin: "0",
  };

  return (
    <>
      <h1 style={style}>Welcome to Ghostshare</h1>
      <Outlet />
    </>
  );
}

export default Root2;
