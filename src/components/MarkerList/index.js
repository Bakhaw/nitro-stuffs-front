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
        x='90%'
        y='5%'
        height='35'
        width='35'
        onClick={() => handleClickShowAllStuff()}
        type='close'
      />
      {stuffShown.map((stuff) => {
        console.log({stuff})
        return (
          <Marker
            key={stuff.id}
            x={stuff.x - 17.5}
            y={stuff.y - 17.5}
            // x={`${(stuff.x * 100) / 750}%`}
            // y={`${(stuff.y * 100) / 720}%`}
            height='35'
            width='35'
            onClick={() => handleClickStuffSelected(stuff)}
            type={stuff.type}
          />
        )
      })}
      {allVideos.map((stuffSelected) => (
        <Marker
          key={stuffSelected.id}
          x={stuffSelected.x - 25}
          y={stuffSelected.y - 25}
          // x={`${(stuffSelected.x * 100) / 750}%`}
          // y={`${(stuffSelected.y * 100) / 720}%`}
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
