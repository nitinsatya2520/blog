// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import your CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Welcome To My Blog KNS</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/*<li>
            <Link to="/login">Login</Link> 
          </li>*/}
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
