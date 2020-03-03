import React from 'react';
import logo from '../images/jw-logo-192x192.png';


const Navbar = () => {
  return (
    <nav className="flex items-center flex-wrap bg-gray-900 p-4 text-white">
      <a href="/">
        <img src={logo} alt="Julius" width="50" height="50"/>
      </a>
      <ul className="flex items-center flex-wrap">
        <li className="mx-3"><a className="hover:text-yellow-400" href="/">Employees</a></li>
        <li className="mx-3"><a className="hover:text-yellow-400" href="/create">Create</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;