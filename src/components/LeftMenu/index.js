import React, { useContext, useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom';

import controllerIcon from '../../static/icons/controller.svg';
import { StateContext } from '../../Context';
import routes from './routes';

function LeftMenu() {
  const { toggleGame } = useContext(StateContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => () => {
    setOpen(open);
  };

  const onGameClick = game => () => {
    setOpen(false);
    toggleGame(game);
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
    </React.Fragment>
  );
}

export default LeftMenu;
