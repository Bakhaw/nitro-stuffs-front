import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../Filter';

import filtersList from './filters';

function FilterList({ activeFilters, handleFilterClick }) {
  return (
    <ul className='FiltersList'>
      {filtersList.map((filter) => (
        <li key={filter.type}>
          <Filter
            active={activeFilters.includes(filter.type)}
            filter={filter}
            handleFilterClick={handleFilterClick}
          />
        </li>
      ))}
    </ul>
  );
}

FilterList.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterList;
