import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LeftMenu from '../components/LeftMenu';

import Maps from '../screens/Maps';
import Stuffs from '../screens/Stuffs';

// Refactor this Router later with lazy, Suspense, etc..
// check this: https://github.com/Bakhaw/react-pwa-twitch/blob/master/src/Router/index.js
function Router() {
  return (
    <BrowserRouter>
      <>
        <LeftMenu />
        <Switch>
          <Route path='/game/:game/:map' component={Stuffs} />
          <Route path='/game/:game' component={Maps} />
          <Redirect path='/' to='/game/csgo' />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
