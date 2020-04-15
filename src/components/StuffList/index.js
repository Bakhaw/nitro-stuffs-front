import React from 'react';
import PropTypes from 'prop-types';

import StuffCard from '../StuffCard';

function StuffList({ activeStuffs }) {
  return (
    <div className='StuffList'>
      <div className='StuffList__Title'>
        <h1>MIRAGE</h1>
      </div>
      <ul className='StuffList__Stuffs'>
        {activeStuffs.map((stuff) => (
          <li key={stuff.id}>
            <StuffCard stuff={stuff} />
          </li>
        ))}
      </ul>
    </div>
  );
}

StuffList.propTypes = {
  activeStuffs: PropTypes.array.isRequired,
};

export default StuffList;
