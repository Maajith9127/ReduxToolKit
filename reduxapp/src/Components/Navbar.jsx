import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-10 justify-evenly'>
          <Link to="/">Products</Link>
          <Link to="/trial">Navbar</Link>




    </div>
  )
}

export default Navbar