import React from 'react';

import csgoMaps from '../../static/maps/csgo';
import valorantMaps from '../../static/maps/valorant';

import MapList from '../../components/MapList';

function Maps({ match }) {
  const game = match.params.game;

  let maps = [];
  if (game === 'csgo') {
    maps = csgoMaps;
  } else if (game === 'valorant') {
    maps = valorantMaps;
  }

  return <MapList maps={maps} />;
}

export default Maps;
