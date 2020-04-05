import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function Filter({ active = false, filter, handleFilterClick, match }) {
  const { game } = match.params;

  const backgroundURL = require(`../../static/images/${game}/stuff-icons/${filter.type}.svg`);
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
  handleFilterClick: PropTypes.func.isRequired
};

export default withRouter(Filter);
