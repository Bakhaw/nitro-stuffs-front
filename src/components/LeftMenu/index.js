import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom';

import routes from './routes';
import controllerIcon from '../../static/icons/controller.svg';

function LeftMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => () => {
    setOpen(open);
  };

  return (
    <React.Fragment>
      <button className='LeftMenu_button' onClick={toggleDrawer(true)}>
        <img
          className='LeftMenu_button__img'
          alt='ControllerIcon'
          src={controllerIcon}
        />
      </button>
      <SwipeableDrawer
        disableDiscovery
        anchor='left'
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className='LeftMenu'>
          <ul className='LeftMenu__links'>
            {routes.map(({ img, to }, index) => (
              <li className='LeftMenu__links__link' key={index}>
                <Link onClick={toggleDrawer(false)} to={to}>
                  <img
                    alt={img}
                    className='LeftMenu__links__img'
                    src={require(`../../static/images/${img}/game-icon/${img}.png`)}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default LeftMenu;
