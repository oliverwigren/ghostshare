import React from 'react'
import HeaderArea from './HeaderArea'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
        <HeaderArea />
        <Outlet />
        </>
    )
}

export default Root