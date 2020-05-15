import React from 'react';
import PropTypes from 'prop-types';

import svgIcons from '../../static/icons';

function Image({ width, height, iconType, fill, style }) {
  const svgIcon = svgIcons.filter((icon) => icon.type === iconType)[0];
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 55 55'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
    >
      {svgIcon.d.map((d) => (
        <path key={d} d={d} fill={fill ? fill : svgIcon.defaultFill} />
      ))}
    </svg>
  );
}

Image.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  fill: PropTypes.string,
  style: PropTypes.array,
};

export default Image;
