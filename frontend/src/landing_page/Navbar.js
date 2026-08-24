import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid cont">
        <Link className="navbar-brand ms-5 logo" to="/">Trade-X</Link>
        <div className='com'>
          <ul className="navbar-nav components">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa fa-bars"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;