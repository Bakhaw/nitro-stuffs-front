import React, { useContext, useEffect, useState } from 'react';

import { fetchMapList } from '../../API/methods/maps';
import { StateContext } from '../../Context';

import MapList from '../../components/MapList';

function Maps({ match }) {
  const { currentGame, toggleGame } = useContext(StateContext);
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    getMaps();
  }, [currentGame]);

  async function getMaps() {
    toggleGame(match.params.game);

    const maps = await fetchMapList(currentGame);
    setMaps(maps);
  }

  return <MapList maps={maps} />;
}

export default Maps;
