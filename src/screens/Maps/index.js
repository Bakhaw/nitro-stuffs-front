import React from 'react';

import API from '../../API';

import Loader from '../../components/Loader';
import MapList from '../../components/MapList';

function Maps({ match }) {
  const { game } = match.params;

  if (!API[game]) return <Loader />;

  const maps = API[game].getMapList();

  return <MapList maps={maps} />;
}

export default Maps;
