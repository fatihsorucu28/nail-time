import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="curved-text">
        <h1>NailTime</h1>
      </div>
      <nav className={`menu ${showMenu ? 'show' : ''}`}>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
