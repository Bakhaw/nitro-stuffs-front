import React, { useContext } from 'react';

import API from '../../API';
import { StateContext } from '../../Context';

import Loader from '../../components/Loader';
import MapList from '../../components/MapList';

function Maps() {
  const { currentGame } = useContext(StateContext);

  if (!API[currentGame]) return <Loader />;

  const maps = API[currentGame].getMapList();

  return <MapList maps={maps} />;
}

export default Maps;
