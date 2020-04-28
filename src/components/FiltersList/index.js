import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../Filter';

import filtersList from './filters';

function FilterList({ activeFilters, handleFilterClick }) {
  return (
    <div className='FiltersList'>
      <h3 className='FiltersList__Title'>FILTERS</h3>
      <ul className='FiltersList__Filters'>
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
    </div>
  );
}

FilterList.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterList;
