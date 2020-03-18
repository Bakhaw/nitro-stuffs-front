import React from 'react';
import PropTypes from 'prop-types';

import MapCard from '../MapCard';

function MapList({ maps }) {
  return (
    <div className='MaplistContainer'>
      {maps.map(map => (
        <MapCard key={map.key} map={map} />
      ))}
    </div>
  );
}

MapList.propTypes = {
  maps: PropTypes.array.isRequired
};
export default MapList;
