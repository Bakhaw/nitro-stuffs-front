import React from 'react';
import { Link } from 'react-router-dom';

import StuffCard from '../StuffCard';

const stuffs = [
  {
    id: '9avd4ed',
    title: 'Connector from T Spawn',
    type: 'smoke',
    videoId: 'kua_hX-l-V4' // youtube video ID
  },
  {
    id: '9avd4ed',
    title: 'Connector from T Spawn',
    type: 'smoke',
    videoId: 'kua_hX-l-V4' // youtube video ID
  },
  {
    id: '9avd4ed',
    title: 'Connector from T Spawn',
    type: 'smoke',
    videoId: 'kua_hX-l-V4' // youtube video ID
  },
  {
    id: '9avd4ed',
    title: 'Connector from T Spawn',
    type: 'smoke',
    videoId: 'kua_hX-l-V4' // youtube video ID
  },
  {
    id: '9avd4ed',
    title: 'Connector from T Spawn',
    type: 'smoke',
    videoId: 'kua_hX-l-V4' // youtube video ID
  }
];

function StuffList() {
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

export default StuffList;
