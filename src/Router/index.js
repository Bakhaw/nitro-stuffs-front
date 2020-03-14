import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Home from '../screens/Home';
import Maps from '../screens/Maps';

// Refactor this Router later with lazy, Suspense, etc..
// check this: https://github.com/Bakhaw/react-pwa-twitch/blob/master/src/Router/index.js

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/maps' component={Maps} />
          <Route exact path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
