import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { StateContext } from '../../Context';

function Filter({ active = false, filter, handleFilterClick }) {
  const { currentGame } = useContext(StateContext);

  const backgroundURL = require(`../../static/images/${currentGame}/stuff-icons/${filter.type}.svg`);
  const backgroundImage = `url(${backgroundURL})`;

  return (
    <div
      className={`Filter ${active ? 'Filter-active' : ''}`}
      onClick={() => handleFilterClick(filter)}
      style={{ backgroundImage }}
    />
  );
}

Filter.propTypes = {
  active: PropTypes.bool,
  filter: PropTypes.object.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default Filter;
