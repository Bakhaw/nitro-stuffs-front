import React, { useContext, useEffect, useState } from 'react';

import BackButton from '../../components/BackButton';
import FilterList from '../../components/FiltersList';
import StuffList from '../../components/StuffList';

import { fetchStuffListByMapKey } from '../../API/methods/stuffs';
import { StateContext } from '../../Context';

function Stuffs({ match }) {
  const { currentGame } = useContext(StateContext);

  const [activeFilters, setActiveFilters] = useState([]);
  const [activeStuffs, setActiveStuffs] = useState([]);

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
      <StuffList activeStuffs={activeStuffs} />
      <FilterList
        activeFilters={activeFilters}
        handleFilterClick={handleFilterClick}
      />
    </div>
  );
}

export default Stuffs;
