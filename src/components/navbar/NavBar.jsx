import React from 'react';
import './navbar.css';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">Algorithm Visualizer</div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
