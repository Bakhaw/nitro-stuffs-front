import React, { createContext, useEffect, useState } from 'react';

export const StateContext = createContext();

/** App State Provider used now only to save the current game (ex: csgo) */
export const StateProvider = ({ children }) => {
  const defaultGame = localStorage.getItem('currentGame');
  const [currentGame, setCurrentGame] = useState(defaultGame || 'csgo');

  const toggleGame = game => {
    localStorage.setItem('currentGame', game);
    setCurrentGame(game);
  };

  useEffect(() => {}, [currentGame]);

  return (
    <StateContext.Provider value={{ currentGame, toggleGame }}>
      {children}
    </StateContext.Provider>
  );
};
