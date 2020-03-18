import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  {
    img: 'csgo',
    to: '/game/csgo'
  },
  {
    img: 'valorant',
    to: '/game/valorant'
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
                alt={img}
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
