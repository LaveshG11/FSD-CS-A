import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      Welcome User
      <Link to="/cart">View Cart</Link>
      <Link to="/order">View Orders</Link>
      <Link to="/">Home</Link>
      <Link to="/logout">logout</Link>
    </div>
  )
}

export default Navbar
