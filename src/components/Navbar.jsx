import React from 'react'
import { Link } from 'react-router-dom'
// https://64dc6c26e64a8525a0f677a0.mockapi.io/crud
const Navbar = () => {
  return (
    <div className='flex  gap-10 justify-center my-10'>
        <Link to="/create">Create</Link>
        <Link to="/read">Read</Link>

        <form action="">
        <input type="search" name="" placeholder='Search' className='border bg-transparent'/>
        <button type="submit" className='border bg-gray-400 ml-5 btn-sub'>search</button>
        </form>
    </div>
  )
}

export default Navbar
