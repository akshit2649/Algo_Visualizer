import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="menu">
      <div className="menuContainer">
        <h1 className="title">Choose an Algorithm</h1>
        <div className="choises">
          <Link to="/pathfind" className="pathfinding">
            PathFinding Algorithm
          </Link>
          <Link to="/sorting" className="sorting">
            Sorting Algorithm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
