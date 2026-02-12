import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

function MainLayout() {
  return (
    <div className="">
        <Header/>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout