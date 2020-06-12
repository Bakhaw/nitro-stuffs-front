import React, { useContext, useEffect, useState } from 'react';

import BackButton from '../../components/BackButton';
import FilterList from '../../components/FiltersList';
import GameMap from '../../components/GameMap';
import StuffList from '../../components/StuffList';
import FilterDisplays from '../../components/FilterDisplays';

import { fetchStuffListByMapKey } from '../../API/methods/stuffs';
import { StateContext } from '../../Context';

function Stuffs({ match }) {
  const { currentGame } = useContext(StateContext);

  const [activeFilters, setActiveFilters] = useState([]);
  const [activeStuffs, setActiveStuffs] = useState([]);

  const [isDefaultDisplay, setIsDefaultDisplay] = useState(true);

  useEffect(() => {
    getStuffs();
  }, [activeFilters]);

  async function getStuffs() {
    const { map } = match.params;
    const activeStuffs = await fetchStuffListByMapKey(
      currentGame,
      map,
      activeFilters
    );

    setActiveStuffs(activeStuffs);
  }

  function handleFilterDisplaysClick() {
    setIsDefaultDisplay(!isDefaultDisplay);
  }

  function handleFilterClick(filter) {
    let newFilters = [];

    if (!activeFilters.includes(filter.type)) {
      // Si ya pas le type dans le tableau on l'ajoute
      newFilters = [...activeFilters, filter.type];
    } else {
      // Sinon on lui nique sa race du tableau
      newFilters = activeFilters.filter((d) => d !== filter.type);
    }

    setActiveFilters(newFilters);
  }

  return (
    <div className='Stuffs'>
      <BackButton />
      {isDefaultDisplay ? (
        <GameMap activeStuffs={activeStuffs} map={match.params.map} />
      ) : (
        <StuffList activeStuffs={activeStuffs} />
      )}
      <div className='Stuffs__Filters'>
        <FilterDisplays
          isDefaultDisplay={isDefaultDisplay}
          handleFilterDisplaysClick={handleFilterDisplaysClick}
        />
        <FilterList
          activeFilters={activeFilters}
          handleFilterClick={handleFilterClick}
        />
      </div>
    </div>
  );
}

export default Stuffs;
