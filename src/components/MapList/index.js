import React from 'react';
import PropTypes from 'prop-types';

import MapCard from '../MapCard';

function MapList({ maps }) {
  console.log('hihihi', maps);
  return (
    <div className='MapList'>
      {maps.map((map) => (
        <MapCard key={map.key} map={map} />
      ))}
    </div>
  );
}

MapList.propTypes = {
  maps: PropTypes.array.isRequired,
};

export default MapList;
