import React, { useContext, useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom';

import Image from '../Image';
import { StateContext } from '../../Context';
import routes from './routes';

function LeftMenu() {
  const { toggleGame } = useContext(StateContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const onGameClick = (game) => () => {
    setOpen(false);
    toggleGame(game);
  };

  return (
    <nav>
      <button className='LeftMenu_button' onClick={toggleDrawer(true)}>
        <Image width='55' height='55' iconType='controller' />
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
            {routes.map(({ gameKey, to }, index) => (
              <li className='LeftMenu__links__link' key={index}>
                <Link onClick={onGameClick(gameKey)} to={to}>
                  <img
                    alt={gameKey}
                    className='LeftMenu__links__img'
                    src={require(`../../static/images/${gameKey}/game-icon/${gameKey}.png`)}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SwipeableDrawer>
    </nav>
  );
}

export default LeftMenu;
