import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

function Filter({ active = false, filter, handleFilterClick }) {
  return (
    <div
      className={`Filter ${active ? 'Filter-active' : ''}`}
      onClick={() => handleFilterClick(filter)}
    >
      <Image width='50' height='50' iconType={filter.type} />
    </div>
  );
}

Filter.propTypes = {
  active: PropTypes.bool,
  filter: PropTypes.object.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default Filter;
