import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';
import mathImage from './maths.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/quote',
    text: 'Quote',
  },
];

const NavBar = () => (
  <nav className="NavBar">
    <img src={mathImage} alt="Math" />
    <h1>Math Magicians</h1>
    <div>
      {links.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
          style={{ isActive: 'active-link' }}
          className="link"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default NavBar;
