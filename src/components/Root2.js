import React from "react";
import HeaderArea from './HeaderArea'
import { Outlet } from 'react-router-dom'

function Root2() {

    return (
        <>
        <h1>Welcome to Ghostshare</h1>
        <Outlet />
        </>
    )
}

export default Root2