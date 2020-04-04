import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';

import API from '../../API';
import { StateContext } from '../../Context';

import Loader from '../Loader';
import StuffCard from '../StuffCard';

function StuffList({ match }) {
  const { currentGame } = useContext(StateContext);
  const { map } = match.params;
  const stuffs = API[currentGame].getStuffListByMapKey(map);

  if (!stuffs) return <Loader />;

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
