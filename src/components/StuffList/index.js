import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import API from '../../API';

import StuffCard from '../StuffCard';

function StuffList({ match }) {
  const { game, map } = match.params;
  const stuffs = API[game].getStuffListByMapKey(map);

  return (
    <ul className='StuffList'>
      {stuffs.map(stuff => (
        <li key={stuff.id}>
          <Link to={`/game/csgo/stuff/${stuff.id}`}>
            <StuffCard stuff={stuff} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default withRouter(StuffList);
