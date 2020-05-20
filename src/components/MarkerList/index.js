import React from 'react';
import PropTypes from 'prop-types';

import Marker from '../Marker';

function MarkerList({
  allVideos,
  isSelectedStuff,
  stuffShown,
  handleClickShowAllStuff,
  handleClickStuffSelected,
  handleClickVideoSelected,
}) {
  return (
    <div>
      <Marker
        additionalStyles={{ display: isSelectedStuff ? 'block' : 'none' }}
        x={parseInt(640)}
        y={parseInt(15)}
        height='35'
        width='35'
        onClick={() => handleClickShowAllStuff()}
        type='close'
      />
      {stuffShown.map((stuff) => (
        <Marker
          key={stuff.id}
          x={stuff.x}
          y={stuff.y}
          height='35'
          width='35'
          onClick={() => handleClickStuffSelected(stuff)}
          type={stuff.type}
        />
      ))}
      {allVideos.map((stuffSelected) => (
        <Marker
          key={stuffSelected.id}
          x={stuffSelected.x}
          y={stuffSelected.y}
          height='50'
          width='50'
          onClick={() => handleClickVideoSelected(stuffSelected)}
          type='position'
        />
      ))}
    </div>
  );
}

MarkerList.propTypes = {
  allVideos: PropTypes.array.isRequired,
  isSelectedStuff: PropTypes.bool.isRequired,
  stuffShown: PropTypes.array.isRequired,
  handleClickShowAllStuff: PropTypes.func.isRequired,
  handleClickStuffSelected: PropTypes.func.isRequired,
  handleClickVideoSelected: PropTypes.func.isRequired,
};

export default MarkerList;
