import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    img: 'csgo',
    to: '/csgo'
  },
  {
    img: 'valorant',
    to: '/valorant'
  }
];

function NavBar() {
  return (
    <nav className='NavBar'>
      <ul className='NavBar_Links'>
        {routes.map(({ img, to }, index) => (
          <li className='NavBar_Link' key={index}>
            <Link to={to}>
              <img
                className='NavBar_img'
                src={require(`../../static/images/${img}/${img}.png`)}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
