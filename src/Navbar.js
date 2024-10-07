import React from 'react';
import './Navbar.css'; // optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/services">Services</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="navbar-item">
          <button className="yellow-button">Get Started</button> {/* Yellow button */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
