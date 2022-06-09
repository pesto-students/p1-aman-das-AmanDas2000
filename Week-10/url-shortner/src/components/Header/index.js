import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => {
  let activeStyle = {
      color:'cyan'
  };


  return (
    <div className="header">
      <div className="container">
        <div className="logo"><NavLink to="/" className="links">
              Shortly
            </NavLink></div>
        <div className="linkWrap">
          <div>
            <NavLink to="/" className="links" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact" className="links" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Contact us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
