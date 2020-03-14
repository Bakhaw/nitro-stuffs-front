import React from 'react';

import maps from '../../maps';
import MapCard from '../MapCard';

function MapList() {
  return (
    <ul>
      {maps.map(map => (
        <li key={map.key}>
          <MapCard map={map} />
        </li>
      ))}
    </ul>
  );
}

export default MapList;
