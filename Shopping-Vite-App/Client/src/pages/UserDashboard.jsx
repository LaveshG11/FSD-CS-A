import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default UserDashboard
