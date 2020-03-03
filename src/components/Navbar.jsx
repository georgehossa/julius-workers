import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/jw-logo-192x192.png';


const Navbar = () => {
  return (
    <nav className="flex items-center flex-wrap bg-gray-900 p-4 text-white">
      <a href="/">
        <img src={logo} alt="Julius" width="50" height="50"/>
      </a>
      <ul className="flex items-center flex-wrap">
        <li className="mx-3">
          <Link className="hover:text-yellow-400" to="/">Employees</Link>
        </li>
        <li className="mx-3">
          <Link className="text-black rounded py-3 px-6 bg-yellow-400 hover:text-white hover:bg-yellow-600 transition-colors duration-300" to="/create">Create</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;