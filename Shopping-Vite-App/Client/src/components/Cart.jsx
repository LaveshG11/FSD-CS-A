import React from 'react'
import './Cart.css'
const Cart = ({item}) => {
  return (
    <div className='card'>
      <img src={item.image}
                width={200}
                height={200}
                alt={item.title}/>
      <h2>Title:{item.title}</h2>          
    </div>
  )
}

export default Cart