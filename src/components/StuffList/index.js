import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StuffCard from '../StuffCard';

function StuffList({ activeStuffs }) {
  return (
    <div className='StuffList'>
      <ul className='StuffList__Stuffs'>
        {activeStuffs.map((stuff) => (
          <li key={stuff.id}>
            <Link to={`/game/csgo/stuff/${stuff.id}`}>
              <StuffCard stuff={stuff} />
            </Link>
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
