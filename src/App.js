import React from 'react';

import { StateProvider } from './Context';
import Router from './Router';
import UpdateApp from './components/UpdateApp';

function App() {
  return (
    <main>
      <StateProvider>
        <Router />
        <UpdateApp />
      </StateProvider>
    </main>
  );
}

export default App;
