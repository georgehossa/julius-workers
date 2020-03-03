import React from 'react';
import logo from '../images/jw-logo-192x192.png';


const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="Julius"/>
      </a>
      <ul>
        <li><a href="/">Employees</a></li>
        <li><a href="/create">Create</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;