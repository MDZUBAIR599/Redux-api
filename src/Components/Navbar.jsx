import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <div>
        <Link to='/todo'>Todo ITEMS</Link>
        </div>

    </div>
  )
}

export default Navbar