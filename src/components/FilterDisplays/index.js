import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

function FilterDisplays({ isDefaultDisplay, handleFilterDisplaysClick }) {
  const displays = [
    {
      key: 'map',
      icon: 'miniMap',
      additionalStyle: `${
        isDefaultDisplay ? 'FilterDisplays__ImageActive' : ''
      }`,
      size: `${isDefaultDisplay ? '50' : '30'}`,
    },
    {
      key: 'video',
      icon: 'camera',
      additionalStyle: `${
        !isDefaultDisplay ? 'FilterDisplays__ImageActive' : ''
      }`,
      size: `${!isDefaultDisplay ? '50' : '30'}`,
    },
  ];
  return (
    <div className='FilterDisplays'>
      {displays.map((display) => (
        <div
          key={display.key}
          className={`FilterDisplays__Image ${display.additionalStyle}`}
          onClick={handleFilterDisplaysClick}
        >
          <Image
            width={display.size}
            height={display.size}
            iconType={display.icon}
          />
        </div>
      ))}
    </div>
  );
}

FilterDisplays.propTypes = {
  handleFilterDisplaysClick: PropTypes.func.isRequired,
  isDefaultDisplay: PropTypes.bool.isRequired,
};

export default FilterDisplays;
