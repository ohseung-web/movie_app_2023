import React from 'react';
import './Navgation.css';
import { Link } from 'react-router-dom';

function Navgation() {
  return (
    <div className="navi">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default Navgation;
