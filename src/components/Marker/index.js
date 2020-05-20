import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

function Marker({ additionalStyles, x, y, height, width, onClick, type }) {
  return (
    <div
      className='Marker'
      style={{
        position: 'absolute',
        left: x,
        top: y,
        ...additionalStyles,
      }}
      onClick={onClick}
    >
      <Image width={width} height={height} iconType={type} />
    </div>
  );
}

Marker.propTypes = {
  additionalStyles: PropTypes.object,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Marker;
