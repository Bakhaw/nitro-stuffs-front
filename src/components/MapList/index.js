import React from 'react';
import PropTypes from 'prop-types';

import maps from '../../static/maps';

import MapCard from '../MapCard';

function MapList({ game }) {
  return (
    <div className='MaplistContainer'>
      {maps.map(map => (
        <MapCard key={map.key} map={map} game={game} />
      ))}
    </div>
  );
}

MapList.propTypes = {
  game: PropTypes.string.isRequired
};

export default MapList;
