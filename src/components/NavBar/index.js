import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Maps',
    to: '/maps'
  }
];

function NavBar() {
  return (
    <nav>
      <ul>
        {routes.map(({ text, to }, index) => (
          <Link key={index} to={to}>
            {text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
