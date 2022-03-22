import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/app',
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
    <h1>Math Magicians</h1>
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
  </nav>
);

export default NavBar;
