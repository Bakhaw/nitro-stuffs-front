import React from 'react';
import { Link } from 'react-router-dom';

import routes from './routes';

function LeftMenu() {
  return (
    <nav className='LeftMenu'>
      <ul className='LeftMenu__links'>
        {routes.map(({ img, to }, index) => (
          <li className='LeftMenu__links__link' key={index}>
            <Link to={to}>
              <img
                alt={img}
                className='LeftMenu__links__img'
                src={require(`../../static/images/${img}/game-icon/${img}.png`)}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LeftMenu;
