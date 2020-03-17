import React from 'react';

import MapList from '../../components/MapList';

function Maps(props) {
  const game = props.match.params.game;

  return <MapList game={game} />;
}

export default Maps;
