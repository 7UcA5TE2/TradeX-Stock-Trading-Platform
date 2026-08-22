import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid cont">
        <a className="navbar-brand ms-5 logo" href="#">Trade-X</a>
        <div className='com'>
          <ul className="navbar-nav components">
            <li className="nav-item">
              <a className="nav-link" href="#">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
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