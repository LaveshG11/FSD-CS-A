import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import UserDashboard from './pages/UserDashboard'
import ShoppingItems from './components/ShoppingItems'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserDashboard/>}>
            <Route index element={<ShoppingItems/>}/>
            <Route path='cart' element={<h1>View Cart</h1>}/>
            <Route path='order' element={<h1>View Order</h1>}/>
            <Route path='logout' element={<h1>Logout</h1>}/>
          </Route>
          <Route path='/register' element={<h1>Register Here</h1>}/>
          <Route path='/login' element={<h1>Login Here</h1>}/>
          <Route path='*' element={<h1>404 Error Page</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
