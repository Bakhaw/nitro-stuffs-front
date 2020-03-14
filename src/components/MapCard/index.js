import React from 'react';
import PropTypes from 'prop-types';

function MapCard({ map }) {
  return <div>{map.name}</div>;
}

MapCard.propTypes = {
  map: PropTypes.object.isRequired
};

export default MapCard;
