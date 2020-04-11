import React, { useContext } from 'react';

import { StateContext } from '../../Context';

import BackButton from '../../components/BackButton';
import StuffList from '../../components/StuffList';

function Stuffs() {
  const { currentGame } = useContext(StateContext);

  if (currentGame === 'valorant') return <p>Valorant coming soon...</p>;

  return (
    <div className='Stuffs'>
      <BackButton />
      <StuffList />
    </div>
  );
}

export default Stuffs;
