// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">SignUp</Link>
      <Link to="/community">Community</Link>
      <Link to="/faq">FAQs</Link>
      <Link to="/report">Report</Link>
      <Link to="/sdg">SDG</Link>
      <Link to="/conway">Conway</Link>

    </nav>
  );
};

export default Navigation;
