import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    text: 'CSGO',
    to: '/csgo'
  },
  {
    text: 'Valorant',
    to: '/valorant'
  }
];

function NavBar() {
  return (
    <nav className='NavBar'>
      <ul className='navbar-ul'>
        {routes.map(({ text, to }, index) => (
          <li key={index}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
