import React from 'react';
import './navbar.css';
import { Outlet, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div
          className="navContainer"
          onClick={() => {
            navigate('/');
          }}
        >
          Algorithm Visualizer
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
