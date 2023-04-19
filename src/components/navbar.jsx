import React from 'react'
import { useContext } from 'react'
import cartQuantity from './cartContext';
const Navbar = () => {
  const {total}=useContext(cartQuantity);
  return (
    <div>
      <h2>This is the navbar</h2>
      <p>{total}</p>
    </div>
  )
}

export default Navbar