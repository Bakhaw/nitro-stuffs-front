import React, { useContext } from 'react';

import API from '../../API';
import { StateContext } from '../../Context';

import MapList from '../../components/MapList';

function Maps() {
  const { currentGame } = useContext(StateContext);
  const maps = API.methods.getMapList(currentGame);

  return <MapList maps={maps} />;
}

export default Maps;
